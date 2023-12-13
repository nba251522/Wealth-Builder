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

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const [login, { error: loginError, data: loginData }] = useMutation(LOGIN_USER);
  const [register, { error: signUpError, data: signUpData }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (signUpData) {
      console.log("sign up data:", signUpData);
    }
    
    if (loginData) {
      console.log("login data:", loginData);
    }
  }, [signUpData, loginData])


  const loginFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Getting { token, user } from server-side
      const { data } = await login({
        variables: {
          email: loginEmail,
          password: loginPassword,
        },
      });

      setLoginEmail('');
      setLoginPassword('');

      setShowLogin(false)
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

      setShowRegister(false);
    } catch (err) {
      console.error(signUpError);
    }
  };

  const onChangeLoginEmail = (event) => {
    setLoginEmail(event.target.value)
  }

  const onChangeLoginPassword = (event) => {
    setLoginPassword(event.target.value)
  }

  const onChangeSignupEmail = (event) => {
    setSignupEmail(event.target.value)
  }

  const onChangeSignupUsername = (event) => {
    setSignupUsername(event.target.value)
  }

  const onChangeSignupPassword = (event) => {
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
          <form onSubmit={loginFormSubmit}>
            <div className='mb-3'>
              <label htmlFor='login-email'>Email:</label>
              <input
                id='login-email'
                className='form-control'
                type='text'
                value={loginEmail}
                onChange={onChangeLoginEmail}
                placeholder='name@example.com'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='login-password'>Password:</label>
              <input
                id='login-password'
                className='form-control'
                type='password'
                value={loginPassword}
                onChange={onChangeLoginPassword}
                placeholder='6 character minimum'
              />
            </div>
            <button className='btn btn-primary'>Login</button>
          </form>
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
                onChange={onChangeSignupEmail}
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
                onChange={onChangeSignupUsername}
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
                onChange={onChangeSignupPassword}
                placeholder='6 character minimum'
              />
            </div>
            <button className='btn btn-primary'>Sign Up</button>
          </form>
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