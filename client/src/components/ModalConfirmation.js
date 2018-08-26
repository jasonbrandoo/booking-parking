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
    const { modal } = this.state;
    console.log(this.props);
    return (
      <div>
        <p>lorem</p>
        {/* <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Isi Form Ini</ModalHeader>
          <ModalBody>Body Form</ModalBody>
          <Button color="primary" onClick={this.toggle}>
          Klik!!!
          </Button>
          <ModalFooter>
            <small>2018</small>
          </ModalFooter>
        </Modal> */}
      </div>
    );
  }
}

export default ModalConfirmation;
