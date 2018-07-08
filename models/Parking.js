const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  car: [
    {
      carName: {
        type: String,
        required: true
      },
      plateNumber: {
        type: Number,
        required: true
      }
    }
  ],
  slot: [
    {
      slotNumber: {
        type: Number,
        required: true
      },
      startTime: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Parking = mongoose.model('parking', parkingSchema);
