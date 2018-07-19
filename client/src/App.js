import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import ParkingForm from './components/ParkingForm';
import ParkingList from './components/ParkingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ParkingForm />
            <ParkingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
