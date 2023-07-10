const express = require('express');
  const http = require('http');
const mongoose = require('mongoose');
const port = 5000;
const mongodbUrl = 'mongodb://127.0.0.1:27020/userdata?directConnection=true&serverSelectionTimeoutMS=2000';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

// MongoDB connection and change streams
mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const db = mongoose.connection;
    const get_mac_address = fs.readFileSync('allData.json');
    const copy_of_mac_address = JSON.parse(get_mac_address);
    var collections = copy_of_mac_address.map((mac,index)=>{
      const adress = (mac.devicemacaddress).replace(/[:\-]/g, "_");
      return adress;
    }); // Add your collection names here
    console.log("checking for all this collections : ",collections);
    // const collections = ['datas', 'a4_a4_a4_a4_a4_a4'];
    io.on('connection', (socket) => {
      // Fetch initial data for all collections
      Promise.all(
        collections.map((collection) => {
          return db.collection(collection).find({}).toArray();
        })
        )
        .then((data) => {
          socket.emit('message', data);
          console.log(data);
        })
        .catch((error) => {
          console.log('Error retrieving initial data:', error);
        });

      socket.on('disconnect', () => {
        // Cleanup on disconnect
      });
    });

    // Change streams for all collections
    collections.forEach((collection) => {
      const changeStream = db.collection(collection).watch();

      changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
          db.collection(collection)
            .find({})
            .toArray()
            .then((data) => {
              console.log(`Changes found in ${collection}`);
              io.emit('inserted_message', data);
            })
            .catch((error) => {
              console.log(`Error retrieving changed data in ${collection}:`, error);
            });
        }
      });
    });
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
  });

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




// const express = require('express');
// const http = require('http');
// const mongoose = require('mongoose');
// const port = 5000;
// const mongodbUrl = 'mongodb://127.0.0.1:27020/userdata?directConnection=true&serverSelectionTimeoutMS=2000';

// const app = express();
// const server = http.createServer(app);
// const io = require('socket.io')(server, { cors: { origin: "*" } });

// // MongoDB connection and change stream
// mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     const db = mongoose.connection;
//     const mycollections = db.collection('datas');

//     // Socket.io connection
//     io.on('connection', (socket) => {
      
//         mycollections.find({}).toArray()
//           .then((data) => {
//             socket.emit('message', data);
//           })
//           .catch((error) => {
//             console.log('Error retrieving initial data:', error);
//           });
      
//       socket.on('disconnect', () => {
        
//       });
//     });

//     // Change stream
//     const changeStream = mycollections.watch();

//     changeStream.on('change', (change) => {
//       if (change.operationType === 'insert') {
//         mycollections.find({}).toArray()
//           .then((data) => {
//             console.log("Changes found");
//             io.emit('message', data);
//           })
//           .catch((error) => {
//             console.log('Error retrieving changed data:', error);
//           });
//       }
//     });
//   })
//   .catch((err) => {
//     console.log('Failed to connect to MongoDB:', err);
//   });

// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

