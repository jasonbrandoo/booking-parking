import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

class ModalConfirmation extends React.Component {
  state = {
    modal: true,
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    // const { modal } = this.state;
    const { isOpen } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Isi Form Ini</ModalHeader>
          <ModalBody>Body Form</ModalBody>
          <ModalFooter>
            <small>2018</small>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalConfirmation;
