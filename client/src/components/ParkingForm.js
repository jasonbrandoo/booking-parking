import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { carIn, parkingCar } from '../actions/carAction';

class ParkingForm extends Component {
  state = {
    carOwner: '',
    carName: '',
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
      owner, carName, plateNumber, selection, startTime,
    } = this.state;
    const newCar = {
      owner,
      carName,
      plateNumber,
      selection,
      startTime,
    };

    if (window.confirm('Are you sure')) {
      alert('Success');
      this.props.carIn(newCar);
      this.props.parkingCar('booked');
    } else {
      alert('Aborted');
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>
          Enter Your Name
          </Label>
          <Input
            type="text"
            name="owner"
            placeholder="Your Name"
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
          Car Name
          </Label>
          <Input
            type="text"
            name="carName"
            placeholder="Car's Name"
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
          Plate Number
          </Label>
          <Input
            type="text"
            name="plateNumber"
            placeholder="Plate Number"
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
          Start Time
          </Label>
          <Input
            type="time"
            name="startTime"
            placeholder="Start Time"
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <Button color="dark">
        Submit
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { carIn, parkingCar },
)(ParkingForm);
