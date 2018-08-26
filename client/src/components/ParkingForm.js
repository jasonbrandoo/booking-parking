import React, { Component } from 'react';
import {
  Form, FormGroup, Label, Input, Button, Container,
} from 'reactstrap';

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
    this.props.handleForm(dummyData);
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
              Klik!!!
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ParkingForm;
