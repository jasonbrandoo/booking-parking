import React, { Component } from 'react';

class ParkingForm extends Component {
  state = {
    carOwner: '',
    carType: '',
    plateNumber: '',
    startTime: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      carOwner, carType, plateNumber, startTime,
    } = this.state;
    const data = {
      carOwner,
      carType,
      plateNumber,
      startTime,
    };
    this.props.postDummyData(data);
    this.setState({
      carOwner: '',
      carType: '',
      plateNumber: '',
      startTime: '',
    });
    console.log(this.state);
  };

  render() {
    const {
      carOwner, carType, plateNumber, startTime,
    } = this.state;
    return (
      <div className="main-form">
        <form onSubmit={this.onSubmit}>
          <label id="name">
            Nama
          </label>
          <input
            type="text"
            name="carOwner"
            placeholder="Your Name"
            onChange={this.onChange}
            value={carOwner}
            required
          />
          <label>
            Tipe Mobil
          </label>
          <input
            type="text"
            name="carType"
            placeholder="Car's Name"
            onChange={this.onChange}
            value={carType}
            required
          />
          <label>
            Plat Nomor
          </label>
          <input
            type="text"
            name="plateNumber"
            placeholder="Plate Number"
            onChange={this.onChange}
            value={plateNumber}
            required
          />
          <label>
            Masuk Pada Pukul
          </label>
          <input
            type="time"
            name="startTime"
            placeholder="Start Time"
            onChange={this.onChange}
            value={startTime}
            required
          />
          <button type="submit">
            Klik!!!
          </button>
        </form>
      </div>
    );
  }
}

export default ParkingForm;
