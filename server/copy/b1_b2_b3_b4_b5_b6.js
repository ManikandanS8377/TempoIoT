const fs = require('fs');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
const path = require('path');
const {name} = path.parse(__filename);
const app=require('./route')



const allData = JSON.parse(fs.readFileSync('../allData.json'));

let host = '';
let username = '';
let password = '';
for (let i = 0; i < allData.length; i++) {
  let ini=allData[i].devicemacaddress.replace(/[:\-]/g, "_");
  if (ini === name) {
    host = allData[i].host;
    username=allData[i].username;
    password=allData[i].password;

    //MONGO DB CONNECTION

      mongoose.connect("mongodb://127.0.0.1:27017/userdata", { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to database!');
        const dataCollection = mongoose.connection.collection(`${name}`);
         // Define an API endpoint to fetch and send data
        app.get(`/api/${name}`,async (req, res) => {
    
         await dataCollection.find({}).toArray((err, documents) => {
            if (err) {
              console.error(err);
              mongoose.connection.close();
              return res.status(500).json({ error: 'Internal server error' });
            }
          }).then((data)=>{res.json(data)})
          
        });
    
        
      })
      .catch(err => console.error(err));;
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function() {
        console.log("MongoDB connection successful");
      });



    // MQTT code
    //MQTT CONNECTION

    const mqttClient = mqtt.connect(host);
    mqttClient.on('connect',function(){
      mqttClient.subscribe(`${name}`);
      console.log("MQTT client has been subscribed....");
    });

    //MQTT MESSAGE

      mqttClient.on('message',async function(topic,message){
        console.log("MQTT message received");
      
        var data = message.toString();   
        var users = JSON.parse(data);
        var valueArray = new Array();
    
        for(var idx in users) {
          var item = users[idx];
          valueArray.push(item);
        }
      
        var myobj = { Timestamp: valueArray[0], Temperature: valueArray[1], Pressure: valueArray[2] };
        console.log(myobj);

        db.collection(`${name}`).insertOne(myobj, function (err, result) {
          if (err) {
            console.error(err);
          } else {
            console.log("1 document inserted");
          }


      });
    });


    break;
  }
}





