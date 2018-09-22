const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

router.get('/', (req, res) => {
  Contact
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({
        err,
      });
      console.log(err);
    });
});

router.post('/', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
  } = req.body;
  const newContact = new Contact({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
  });
  newContact
    .save()
    .then((result) => {
      res.json({
        newContact: result,
      });
    })
    .catch((err) => {
      res.json({
        err,
      });
    });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updatedContact = {
    firstname: req.body.firsname,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
  };
  Contact
    .update({ _id: id }, updatedContact)
    .then((result) => {
      res.json({
        updated: result,
      });
    })
    .catch((err) => {
      res.json({
        err,
      });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Contact
    .remove({ _id: id })
    .then((result) => {
      res.json({
        deleted: result,
      });
    })
    .catch((err) => {
      res.json(
        err,
      );
      console.log(err);
    });
});

module.exports = router;
