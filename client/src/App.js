import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ModalForm from './components/ModalForm';
import ParkingList from './components/ParkingList';
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
          <Container>
            <ModalForm />
            <ParkingList />
          </Container>
          <AppFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
