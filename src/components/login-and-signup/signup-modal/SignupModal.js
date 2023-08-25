import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignupModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileOrEmail: '',
    newPassword: '',
    dateOfBirth: '',
    gender: 'male', // Default value
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Perform signup logic here
    // Use the formData state to access form values
    console.log('Form data submitted:', formData);

    // After handling the signup logic, you might want to close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="font-weight-bold signup-title">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              autoComplete="given-name"
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              autoComplete="family-name"
            />
          </Form.Group>
          <Form.Group controlId="mobileOrEmail">
            <Form.Label>Mobile Number or Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number or email"
              name="mobileOrEmail"
              value={formData.mobileOrEmail}
              onChange={handleInputChange}
              required
              autoComplete="username"
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a new password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              required
              autoComplete="new-password"
            />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              autoComplete="sex"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button type="submit" variant="success" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
