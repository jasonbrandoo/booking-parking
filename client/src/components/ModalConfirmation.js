import React from 'react';
import {
  Button, Modal, ModalHeader,
} from 'reactstrap';
import ParkingForm from './ParkingForm';

class ModalConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <h4>
Selamat Datang
        </h4>
        <p>
Selamat datang di sistem kami. Melalui sistem kami anda dapat melakukan reservasi tempat parkir yang sudah kami siapakan
        </p>
        <Button color="primary" onClick={this.toggle}>
        Klik Disini Untuk Reservasi Tempat Parkir Anda
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
          Isi Form Ini
          </ModalHeader>
          <ParkingForm />
        </Modal>
      </div>
    );
  }
}

export default ModalConfirmation;
