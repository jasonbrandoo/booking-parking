import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { carIn } from '../actions/carAction';

class ParkingForm extends Component {
  state = {
    carOwner: '',
    carName: '',
    plateNumber: '',
    startTime: '',
    modal: false,
    modalNested: false,
    closeAll: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      carOwner, carName, plateNumber, startTime,
    } = this.state;
    const newCar = {
      carData: [{
        carOwner,
        carName,
        plateNumber,
        startTime,
      }],
      modal: true,
    };
    this.props.checkForm(newCar);
    console.log(newCar);
    this.props.carIn(newCar);
    this.toggle();
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  toggleNested = () => {
    this.setState(prevState => ({
      modalNested: !prevState.modalNested,
      closeAll: false,
    }));
  }

  toggleAll = () => {
    this.setState(prevState => ({
      modalNested: !prevState.modalNested,
      closeAll: true,
    }));
  }

  render() {
    const { modal, modalNested, closeAll } = this.state;
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
        Klik Disini Untuk Reservasi Tempat Parkir Anda
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
          Isi Form Ini
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label>
                  Nama
                </Label>
                <Input
                  type="text"
                  name="carOwner"
                  placeholder="Your Name"
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Tipe Mobil
                </Label>
                <Input
                  type="text"
                  name="carName"
                  placeholder="Cars Name"
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Plat Nomor
                </Label>
                <Input
                  type="text"
                  name="plateNumber"
                  placeholder="Plate Number"
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Masuk Pada Pukul
                </Label>
                <Input
                  type="time"
                  name="startTime"
                  placeholder="Start Time"
                  onChange={this.onChange}
                  required
                />
              </FormGroup>
              <Button color="success" className="mb-5 mr-5" onClick={this.toggleNested}>
                Check
              </Button>
              <Button color="primary" className="mb-5">
                Submit
              </Button>
            </Form>
          </ModalBody>
          <Modal isOpen={modalNested} toggle={this.toggleNested} onClosed={closeAll ? this.toggle : undefined}>
            <ModalHeader>
              <strong>
                Ketentuan
              </strong>
            </ModalHeader>
            <ModalBody>
              <p>
                Nama Anda
              </p>
              <p>
                <strong>
                  {this.state.carOwner}
                </strong>
              </p>
              <hr />
              <p>
                Jenis Mobil
              </p>
              <p>
                <strong>
                  {this.state.carName}
                </strong>
              </p>
              <hr />
              <p>
                Plat Nomor
              </p>
              <p>
                <strong>
                  {this.state.plateNumber}
                </strong>
              </p>
              <hr />
              <p>
                Jam Masuk
              </p>
              <p>
                <strong>
                  {this.state.startTime}
                </strong>
              </p>
              <hr />
              <p>
                Harga yang harus dibayar Adalah -
                <strong>
                Rp.50.000,00
                </strong>
              </p>
              <Button color="success" className="mb-5" onClick={this.toggleNested} block>
                Ok
              </Button>
            </ModalBody>
          </Modal>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { carIn },
)(ParkingForm);
