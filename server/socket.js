

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const port = 5000;
const mongodbUrl = 'mongodb://127.0.0.1:27030/userdata?directConnection=true&serverSelectionTimeoutMS=2000';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
let a = 1;
// MongoDB connection and change stream
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const db = mongoose.connection;
    const mycollections = db.collection('datas');

    // Socket.io connection
    io.on('connection', (socket) => {
      if (a === 1) {
        a=2;
        mycollections.find({}).toArray()
          .then((data) => {
            socket.emit('message', data);
            console.log("Emitted initial data");
          })
          .catch((error) => {
            console.log('Error retrieving initial data:', error);
          });
      }
      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });

    // Change stream
    const changeStream = mycollections.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        mycollections.find({}).toArray()
          .then((data) => {
            console.log("Changes found");
            io.emit('message', data);
          })
          .catch((error) => {
            console.log('Error retrieving changed data:', error);
          });
      }
    });
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
  });

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

