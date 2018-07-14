import React, { Component } from 'react';
import ParkingForm from './PakingForm';
import { connect } from 'react-redux';
import { parkingCar } from '../actions/carAction';
import PropTypes from 'prop-types';
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
  componentDidMount() {
    this.props.parkingCar();
  }
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

ParkingList.propTypes = {
  parkingCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  car: state.car
});

export default connect(
  mapStateToProps,
  { parkingCar }
)(ParkingList);
