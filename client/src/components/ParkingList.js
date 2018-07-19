import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    console.log(this.props);
    return (
      <div>
        <Container>
          <Row className="text-center">
            <Col sm="2">
              <h1>1</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="2">
              <h1>2</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="2">
              <h1>3</h1>
              <Card color="success">
                <CardBody>
                  <h3>Empty</h3>
                  <Button color="primary">Book Now</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="2">
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null
)(ParkingList);
