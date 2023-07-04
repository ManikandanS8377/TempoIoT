const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());



module.exports=app;