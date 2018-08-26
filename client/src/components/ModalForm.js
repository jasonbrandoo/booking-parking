import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import ParkingForm from './ParkingForm';
import ModalConfirmation from './ModalConfirmation';

class ModalForm extends React.Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  checkForm = (props) => {
    this.toggle();
  };

  render() {
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
            <ParkingForm checkForm={this.checkForm} />
            {/* <ModalConfirmation isOpen={this.state.modal} /> */}
          </ModalBody>
          <ModalFooter>
            <small>2018</small>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
