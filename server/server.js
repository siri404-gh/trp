const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const {serverPort, dist} = require('../variables');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));

app.use('/', express.static(dist));

app.listen(serverPort);

console.log(`SERVER: Listening on port ${serverPort}`);
