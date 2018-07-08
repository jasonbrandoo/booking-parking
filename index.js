const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const parking = require('./routes/api/parking');

const app = express();

const db = require('./config/config').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/parking', parking);

app.listen(3000, () => {
  console.log('server started');
});
