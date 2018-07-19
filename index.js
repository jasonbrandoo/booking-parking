const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const parking = require('./routes/api/parking');
const db = require('./config/config').mongoURI;

const app = express();


mongoose
  .connect(db)
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/parking', parking);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
