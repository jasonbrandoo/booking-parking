import React, { Component } from 'react';
import { carIn } from '../actions/carAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ParkingForm extends Component {
  state = {
    carName: '',
    plateNumber: '',
    startTime: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newCar = {
      owner: this.state.owner,
      carName: this.state.carName,
      plateNumber: this.state.plateNumber,
      startTime: this.state.startTime
    };

    this.props.carIn(newCar);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>
            Enter Your Name
            <Input
              type="text"
              name="owner"
              placeholder="Your Name"
              onChange={this.onChange}
              required
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Car Name
            <Input
              type="text"
              name="carName"
              placeholder="Car's Name"
              onChange={this.onChange}
              required
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Plate Number
            <Input
              type="text"
              name="plateNumber"
              placeholder="Plate Number"
              onChange={this.onChange}
              required
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Start Time
            <Input
              type="time"
              name="startTime"
              placeholder="Start Time"
              onChange={this.onChange}
              required
            />
          </Label>
        </FormGroup>
        <Button color="dark">Submit</Button>
      </Form>
    );
  }
}

ParkingForm.propTypes = {
  carIn: PropTypes.func.isRequired,
  carData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  carData: state.carData
});

export default connect(
  mapStateToProps,
  { carIn }
)(ParkingForm);
