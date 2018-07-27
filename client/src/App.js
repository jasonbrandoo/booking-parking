import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ParkingForm from './components/ParkingForm';
import ParkingList from './components/ParkingList';
import ParkingImage from './components/ParkingImage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ParkingImage />
            <Row>
              <Col sm="6">
                <ParkingForm />
              </Col>
              <Col sm="6">
                <ParkingList />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
