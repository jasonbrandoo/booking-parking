const express = require('express');
const Parking = require('../../models/Parking');

const route = express.Router();

route.get('/', (req, res) => {
  Parking.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

route.post('/', (req, res) => {
  const parking = new Parking({
    carData: [
      {
        carOwner: req.body.carData[0].carOwner,
        carName: req.body.carData[0].carName,
        plateNumber: req.body.carData[0].plateNumber,
        startTime: req.body.carData[0].startTime,
      },
    ],
  });
  parking.save().then((result) => {
    res.json(result);
  });
});

route.delete('/:id', (req, res) => {
  Parking.findById(req.params.id)
    .then((result) => {
      result.remove();
    })
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = route;
