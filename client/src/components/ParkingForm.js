import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postDummyData } from '../actions/carAction';

class ParkingForm extends Component {
  state = {
    dummyData: [],
  };

  onChange = (e) => {
    const dummyData = {
      ...this.state.dummyData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      dummyData,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { dummyData } = this.state;
    this.props.postDummyData(dummyData);
  };

  render() {
    return (
      <div className="parking-form">
        <form onSubmit={this.onSubmit}>
          <label id="name">Nama</label>
          <input
            type="text"
            name="carOwner"
            placeholder="Your Name"
            onChange={this.onChange}
            required
          />
          <label>Tipe Mobil</label>
          <input
            type="text"
            name="carName"
            placeholder="Car's Name"
            onChange={this.onChange}
            required
          /><label>Plat Nomor</label>
          <input
            type="text"
            name="plateNumber"
            placeholder="Plate Number"
            onChange={this.onChange}
            required
          /><label>Masuk Pada Pukul</label>
          <input
            type="time"
            name="startTime"
            placeholder="Start Time"
            onChange={this.onChange}
            required
          />
          <button type="submit" color="dark" className="mb-5">
          Klik!!!
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { postDummyData },
)(ParkingForm);
