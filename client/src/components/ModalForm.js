import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { postDummyData } from '../actions/carAction';
import ParkingForm from './ParkingForm';

class ModalForm extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  handleForm = (props) => {
    this.props.postDummyData(props);
    this.toggle();
  }

  render() {
    console.log(this.state);
    const { modal } = this.state;
    return (
      <div>
        <h4>Selamat Datang</h4>
        <p>
          Melalui sistem kami anda dapat melakukan reservasi tempat parkir yang sudah kami siapkan.
        </p>
        <Button color="primary" onClick={this.toggle}>
          Klik!!!
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Isi Form Ini</ModalHeader>
          <ModalBody>
            <ParkingForm handleForm={this.handleForm} />
          </ModalBody>
          <ModalFooter>
            <small>2018</small>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { postDummyData },
)(ModalForm);
