const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkingSchema = new Schema({
  carData: [
    {
      carOwner: {
        type: String,
        required: true,
      },
      carName: {
        type: String,
        required: true,
      },
      plateNumber: {
        type: String,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Parking = mongoose.model('parking', parkingSchema);
