
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../assets/WB.png'
import '../styles/headfoot.css'

const MyNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  return (
    <>
    <Navbar className='headfoot' bg="body-tertiary" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Wealth Builder Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mx-auto">
          <Nav.Link href="/" active>Home</Nav.Link>
          <Button type="button" onClick={handleLoginShow} className="btn btn-dark">Login</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => { handleLoginClose(); handleRegisterShow(); }}>
            Need an account? Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRegister} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRegisterClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => { handleRegisterClose(); handleLoginShow(); }}>
            Have an account? Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyNavbar;
