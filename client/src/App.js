import React from 'react';
import store from './store';
import AppNavbar from './components/AppNavbar';
import ParkingForm from './components/ParkingForm';
import ParkingList from './components/ParkingList';
import AppFooter from './components/AppFooter';
import './App.css';

const App = () => {
  const { car, space } = store.getState();
  return (
    <div className="App">
      <AppNavbar />
      <div className="container">
        <div className="grid-box">
          <div className="modal-form">
            <h4>Selamat Datang</h4>
            <p>
              Melalui sistem kami anda dapat melakukan reservasi tempat parkir yang sudah kami siapkan.
            </p>
          </div>
          <ParkingList list={car} space={space} />
          <ParkingForm />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default App;
