
const mongoose = require('mongoose');
const mqtt = require('mqtt');
const path = require('path');
const {name} = path.parse(__filename);




//MONGO DB CONNECTION

  mongoose.connect("mongodb://127.0.0.1:27017/userdata", { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("MongoDB connection successful");
  });

const dataSchema = new mongoose.Schema({
  name:String,
  age:Number,
  city:String
},{versionKey:false});
const Datas = mongoose.model('Datas', dataSchema);

// MQTT code

//MQTT CONNECTION

const mqttClient = mqtt.connect('mqtt://broker.emqx.io');
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
  
    var myobj = { name: valueArray[0], age: valueArray[1], city: valueArray[2] };
    const Data = new Datas(myobj);
    try {
      await Data.save();
      console.log("1 document inserted");
    } catch (err) {
      console.error(err);
    }
  });





