import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Notification extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Congratulations!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>You got the answer correct and solved all of our puzzles!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }