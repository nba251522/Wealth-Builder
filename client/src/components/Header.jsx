import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, Button, Modal } from 'react-bootstrap';
import Logo from '../assets/WB.png'
import '../styles/headfoot.css'

import { useMutation } from '@apollo/client';
import { LOGIN_USER, CREATE_USER } from '../utils/mutations';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [signupEmail, setSignupEmail] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [register, { error: signUpError, data: signUpData }] = useMutation(CREATE_USER);

  const loginFormSubmit = async (event) => {
    event.preventDefault();

    // Parse form data
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    try {
      // Getting { token, user } from server-side
      const { data } = await login({
        variables: {
          email: formDataObj.formEmail,
          password: formDataObj.formPassword,
        },
      });

      const { token, user } = data.login;

      return { token, user };

    } catch (err) {
      console.error(loginError);
    }
  };

  const signUpFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await register({
        variables: {
          username: signupUsername,
          email: signupEmail,
          password: signupPassword,
        },
      });

      // Reset the variables
      setSignupEmail('');
      setSignupUsername('');
      setSignupPassword('');

      const { token, user } = signUpData.register;

      return { token, user };
    } catch (err) {
      console.error(signUpError);
    }
  };

  const onChangeEmail = (event) => {
    console.log("event.target.value:", event.target.value);
    setSignupEmail(event.target.value)
  }

  const onChangeUsername = (event) => {
    console.log("event.target.value:", event.target.value);
    setSignupUsername(event.target.value)
  }

  const onChangePassword = (event) => {
    console.log("event.target.value:", event.target.value);
    setSignupPassword(event.target.value)
  }

  return (
    <>
      <Navbar className="bg-secondary" expand="lg">
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
          <Nav className="me-auto text">
            <Link
              to={"/"}
              className={useLocation().pathname === "/" ?
                'nav-link active' :
                'nav-link'}
            >
              Budget
            </Link>

            <Link
              to={"/tracker"}
              className={useLocation().pathname === "/tracker" ?
                'nav-link active' :
                'nav-link'}
            >
              Stock Tracker
            </Link>

            <Link
              to={"/about"}
              className={useLocation().pathname === "/about" ?
                'nav-link active' :
                'nav-link'}
            >
              About Us
            </Link>
            <Button type="button" onClick={handleLoginShow} className="btn btn-dark">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={loginFormSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
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
          <form onSubmit={signUpFormSubmit}>
            <div className='mb-3'>
              <label htmlFor='signup-email'>Email:</label>
              <input
                id='signup-email'
                className='form-control'
                type='text'
                value={signupEmail}
                onChange={onChangeEmail}
                placeholder='name@example.com'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='signup-username'>Username:</label>
              <input
                id='signup-username'
                className='form-control'
                type='text'
                value={signupUsername}
                onChange={onChangeUsername}
                placeholder='3 character minimum'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='signup-password'>Password:</label>
              <input
                id='signup-password'
                className='form-control'
                type='password'
                value={signupPassword}
                onChange={onChangePassword}
                placeholder='6 character minimum'
              />
            </div>
            <button className='btn btn-primary'>Sign Up</button>
          </form>
          {/* <Form onSubmit={signUpFormSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
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
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form> */}
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