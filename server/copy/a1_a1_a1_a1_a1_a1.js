const fs = require('fs');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
const path = require('path');
const { name } = path.parse(__filename);

const allData = JSON.parse(fs.readFileSync('../allData.json'));
// console.log(allData[0].devicemacaddress);
let host = '';
let username = '';
let password = '';
for (let i = 0; i < allData.length; i++) {
  // console.log("allData");
  let ini = allData[i].devicemacaddress.replace(/[:\-]/g, "_");
  // console.log(allData[0].devicemacaddress);
  if (ini === name) {
    host = allData[i].host;
    username = allData[i].username;
    password = allData[i].password;
    
    //MONGO DB CONNECTION
    mongoose.connect("mongodb://127.0.0.1:27017/userdata?directConnection=true&serverSelectionTimeoutMS=2000", { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log("MongoDB connection successful");
      console.log("name");
    });


    // MQTT code
    //MQTT CONNECTION

    const mqttClient = mqtt.connect(host);
    mqttClient.on('connect', function () {
      mqttClient.subscribe(`${name}`);
      console.log("MQTT client has been subscribed....");
    });

    //MQTT MESSAGE

    mqttClient.on('message', async function (topic, message) {
      console.log("MQTT message received");

      var data = message.toString();
      var users = JSON.parse(data);
      var valueArray = new Array();

      for (var idx in users) {
        var item = users[idx];
        valueArray.push(item);
      }

      var myobj = { Timestamp: valueArray[0], Temperature: valueArray[1], Pressure: valueArray[2], Mac_Address: name };
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





