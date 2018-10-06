const express = require('express');

const router = express.Router();

const User = [
  {
    firstName: 'Jason',
    lastName: 'Brando',
    email: 'jasonbrandoo',
    address: 'Bekasi',
    phoneNumber: '089605295830',
  },
];

router.get('/', (req, res) => {
  res.json(User);
});

router.post('/', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
  } = req.body;
  const newUser = [
    {
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
    },
  ];
  res.json(newUser);
});


module.exports = router;
