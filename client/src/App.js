import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavbar from './components/AppNavbar';
import ModalForm from './components/ModalForm';
import ParkingForm from './components/ParkingForm';
import ParkingList from './components/ParkingList';
import AppFooter from './components/AppFooter';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <div className="grid-box">
              <ModalForm />
              <ParkingList />
              <ParkingForm />
            </div>
          </div>
          <AppFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
