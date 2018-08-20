import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ParkingForm from './ParkingForm';
import ModalConfirmation from './ModalConfirmation';

class AppContent extends Component {
  state = {
    carData: [],
    modal: true,
  };

  checkForm = (props) => {
    const cars = [...this.state.carData, props];
    this.setState({
      carData: cars,
    });
  };

  toggler = (props) => {
    this.setState({
      modal: props.modal,
    });
    console.log('modal', props);
  };

  render() {
    return (
      <div className="content">
        <Container>
          <h1>
  Selamat Datang di Sistem Kami
          </h1>
          <p>
  Silahkan isi form kami untuk membooking tempat parkir anda
          </p>
          <ParkingForm checkForm={this.checkForm} />
          <ModalConfirmation checkModal={this.state.carData} toggler={this.state.modal} />
        </Container>
      </div>
    );
  }
}

export default AppContent;
