import React, { Component } from 'react';
import ParkingForm from './PakingForm';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col
} from 'reactstrap';

class ParkingList extends Component {
  render() {
    return (
      <div>
        <Container>
          <ParkingForm />
          <Row className="text-center">
            <Col sm="3">
              <h1>1</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <h1>2</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <h1>3</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <h1>4</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ParkingList;
