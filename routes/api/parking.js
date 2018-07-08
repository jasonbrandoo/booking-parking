const express = require('express');
const route = express.Router();

const Parking = require('../../models/Parking');

route.get('/', (req, res) => {
  Parking.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});

route.post('/', (req, res) => {
  const parking = new Parking({
    name: req.body.name,
    car: [
      {
        carName: req.body.car[0].carName,
        plateNumber: req.body.car[0].plateNumber
      }
    ],
    slot: [
      {
        slotNumber: req.body.slot[0].slotNumber,
        startTime: req.body.slot[0].startTime
      }
    ]
  });
  parking.save().then(result => {
    res.json(result);
  });
});

route.delete('/:id', (req, res) => {
  Parking.findById(req.params.id)
    .then(result => {
      result.remove();
    })
    .then(() => {
      res.json({
        success: true
      });
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = route;
