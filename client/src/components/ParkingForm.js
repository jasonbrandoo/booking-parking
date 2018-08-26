import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Button, Container,
} from 'reactstrap';
import { postDummyData } from '../actions/carAction';

class ParkingForm extends Component {
  state = {
    dummyData: [],
    modal: false,
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
    this.setState({
      modal: !this.state.modal,
    });
    const { dummyData } = this.state;
    const newData = dummyData;
    this.props.handleForm(newData);
    this.props.postDummyData(newData);
    console.log(this.state);
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

export default connect(
  null,
  { postDummyData },
)(ParkingForm);
