const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const port = 5000;
const mongodbUrl = 'mongodb://127.0.0.1:27020/userdata?directConnection=true&serverSelectionTimeoutMS=2000';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });


io.on('connection', (socket) => { 
  mongoose.connect(mongodbUrl, {useNewUrlParser: true,useUnifiedTopology: true,})
  .then(async () => {
    const db = mongoose.connection;
    const mycollections = db.collection('datas');
    const data = await mycollections.find({}).toArray();
    io.emit('message', data);
    console.log("emitted")
    
    const changeStream = mycollections.watch();
    
    changeStream.on('change', async(change) => {
      if (change.operationType === 'insert') {
        const data1 = await mycollections.find({}).toArray();
        console.log("changes found")
        io.emit('message', data1);
      }
    });
    
    

  }).catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
  });


});


server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

