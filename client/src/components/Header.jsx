
import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Modal } from 'react-bootstrap';
import Logo from '../assets/WB.png'
import '../styles/headfoot.css'

import { useMutation } from '@apollo/client';
import { Mutation } from '../../../server/Schema/resolvers';
import { verifyJWT, signJWT } from '../../../server/middleware/authMiddleware';

const MyNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const [login, { loginError }] = useMutation(Mutation.login);
  const [register, { signUpError }] = useMutation(Mutation.register);

  const loginFormSubmit = async (event) => {
    event.preventDefault();

    // Parse form data
    const formData = new FormData(e.target); 
    const formDataObj = Object.fromEntries(formData.entries());

    try {
      const { data } = await login({
        variables: {
          email: formDataObj.email,
          password: formDataObj.password,
        },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }
  };

  const signUpFormSubmit = async (event) => {
    event.preventDefault();
    
    // Parse form data
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    try {
      const { data } = await register({
        variables: {
          email: formDataObj.email,
          username: formDataObj.username,
          password: formDataObj.password,
        },
      });

      Auth.login(data.register.token);
    } catch (err) {
      console.log(err);
    }
  };

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
          <Nav.Link href="/" active>Budget</Nav.Link>
          <Nav.Link href="/StockTracker" active>Stock Tracker</Nav.Link>
          <Nav.Link href="/AboutUs" active>AboutUs</Nav.Link>
          <Button type="button" onClick={handleLoginShow} className="btn btn-dark">Login</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default MyNavbar;
