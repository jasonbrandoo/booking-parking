import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { carIn } from '../actions/carAction';

class ParkingForm extends Component {
  state = {
    owner: '',
    carName: '',
    plateNumber: '',
    selection: '',
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

    this.props.carIn(newCar);
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
          Choose Your Slot
          </Label>
          <br />
          <select name="selection" onChange={this.onChange}>
            <option value="1">
            One
            </option>
            <option value="2">
            Two
            </option>
            <option value="3">
            Three
            </option>
            <option value="4">
            Four
            </option>
            <option value="5">
            Five
            </option>
            <option value="6">
            Six
            </option>
            <option value="7">
            Seven
            </option>
            <option value="8">
            Nine
            </option>
          </select>
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
  { carIn },
)(ParkingForm);
