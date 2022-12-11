const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./database.js');
let revenueController = require('./controllers/revenueController.js');

let app = express();
app.use(bodyParser.json());

 app.listen(3000, () => console.log("Server started at port: 3000"));

 app.use('/revenues', revenueController);