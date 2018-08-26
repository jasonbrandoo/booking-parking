import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import ParkingForm from './ParkingForm';
import ModalConfirmation from './ModalConfirmation';

class ModalForm extends React.Component {
  state = {
    modal: false,
    modalConfirmation: true,
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  checkForm = (props) => {
    console.log(props);
    return (
      <ModalConfirmation isOpen={this.state.modalConfirmation} />
    );
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
          Klik Disini Untuk Reservasi Tempat Parkir Anda
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Isi Form Ini</ModalHeader>
          <ModalBody>
            {
              modal
                ?
                (<ParkingForm checkForm={this.checkForm} />)
                :
                (null)
            }
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
