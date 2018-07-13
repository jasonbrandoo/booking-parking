import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ParkingForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>
            Yourname
            <Input type="text" name="name" placeholder="Input Your Name" />
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default ParkingForm;
