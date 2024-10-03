// ForgotPasswordModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPasswordModal from 'ForgotPasswordModal'; 

const ForgotPasswordModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Forgot Password</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Reset Link
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default ForgotPasswordModal;
