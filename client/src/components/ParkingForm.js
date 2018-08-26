import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Button, Container,
} from 'reactstrap';
import { carIn } from '../actions/carAction';

class ParkingForm extends Component {
  state = {
    carData: [
      {
        carOwner: '',
        carName: '',
        plateNumber: '',
        startTime: '',
      },
    ],
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      carOwner, carName, plateNumber, startTime,
    } = this.state;
    const newCar = {
      carData: [
        {
          carOwner,
          carName,
          plateNumber,
          startTime,
        },
      ],
    };
    this.props.checkForm(newCar);
    // this.props.carIn(newCar);
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label>Nama</Label>
              <Input
                type="text"
                name="carOwner"
                placeholder="Your Name"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Tipe Mobil</Label>
              <Input
                type="text"
                name="carName"
                placeholder="Car's Name"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Plat Nomor</Label>
              <Input
                type="text"
                name="plateNumber"
                placeholder="Plate Number"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Masuk Pada Pukul</Label>
              <Input
                type="time"
                name="startTime"
                placeholder="Start Time"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <Button color="dark" className="mb-5">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  { carIn },
)(ParkingForm);
