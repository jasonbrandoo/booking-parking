import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import ParkingList from './components/ParkingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ParkingList />
        </div>
      </Provider>
    );
  }
}

export default App;
