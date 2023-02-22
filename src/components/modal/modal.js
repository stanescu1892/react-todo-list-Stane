import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.scss";

const CustomModal = ({ children, header = "Add new Task", onClose }) => {
  return (
    <Modal show={true} onHide={() => onClose(false)} className="custom-modal">
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title className="custom-modal-title">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">{children}</Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button
          variant="secondary"
          onClick={() => onClose(false)}
          className="custom-modal-close-button"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
