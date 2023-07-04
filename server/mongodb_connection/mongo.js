const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MongoClient=require('mongodb').MongoClient

const app = express();
const port = 5000;
app.use(cors());

const url = 'mongodb://127.0.0.1:27017/userdata?replicaSet=testreplicaset';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');
    const dataCollection = mongoose.connection.collection('datas');
 
    app.get('/api/sendData', async (req, res) => {
      await dataCollection.find({}).toArray((err, documents) => {
        if (err) {
          console.error(err);
          mongoose.connection.close();
          return res.status(500).json({ error: 'Internal server error' });
        }
      }).then((data) => { res.json(data) })

    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error(err));

