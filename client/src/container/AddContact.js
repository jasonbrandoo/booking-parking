import React, { Component } from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

class AddContact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addContact = (e) => {
    e.preventDefault();
    const newContact = this.state;
    console.log(newContact);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phoneNumber: '',
    });
  }

  render() {
    const {
      firstName, lastName, email, address, phoneNumber,
    } = this.state;
    return (
      <Form className="d-flex flex-column align-items-center" onSubmit={this.addContact}>
        <h1>
        Add Contact
        </h1>
        <FormGroup className="col-sm-6 p-0">
          <Label size="md">
            First Name
          </Label>
          <Input
            type="text"
            name="firstName"
            onChange={this.onChange}
            value={firstName}
          />
        </FormGroup>
        <FormGroup className="col-sm-6 p-0">
          <Label size="md">
            Last Name
          </Label>
          <Input
            type="text"
            name="lastName"
            onChange={this.onChange}
            value={lastName}
          />
        </FormGroup>
        <FormGroup className="col-sm-6 p-0">
          <Label size="md">
            Email
          </Label>
          <Input
            type="text"
            name="email"
            onChange={this.onChange}
            value={email}
          />
        </FormGroup>
        <FormGroup className="col-sm-6 p-0">
          <Label size="md">
            Address
          </Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={address}
          />
        </FormGroup>
        <FormGroup className="col-sm-6 p-0">
          <Label size="md">
            Phone Number
          </Label>
          <Input
            type="text"
            name="phoneNumber"
            onChange={this.onChange}
            value={phoneNumber}
          />
        </FormGroup>
        <Button type="submit" color="primary" className="btn-lg col-sm-6">
          Add
        </Button>
      </Form>
    );
  }
}

export default AddContact;
