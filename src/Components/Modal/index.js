import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class Modals extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.toggleModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
