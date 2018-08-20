import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import AppContent from './components/AppContent';
import ParkingList from './components/ParkingList';
import ParkingImage from './components/ParkingImage';
import AppFooter from './components/AppFooter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ParkingImage />
          <Container>
            <Row>
              <Col sm="6">
                <AppContent />
              </Col>
              <Col sm="6">
                <ParkingList />
              </Col>
            </Row>
          </Container>
          <AppFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
