import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ParkingForm from './ParkingForm';

class ModalConfirmation extends React.Component {
  state = {
    modal: false,
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !this.props.toggler(modal),
    });
  };

  render() {
    const { modal } = this.state;
    return (
      <div>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Hasil
          </ModalHeader>
          <ModalBody>
            <ParkingForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalConfirmation;
