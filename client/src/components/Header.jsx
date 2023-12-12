
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../assets/WB.png'
import '../styles/headfoot.css'

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search functionality here
    console.log('Searching for:', searchTerm);
  };
  return (
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
        <Nav className="me-auto">
        <Nav.Link href="/" active>Login</Nav.Link>
          <Nav.Link href="/" active>Home</Nav.Link>
          <Nav.Link href="/API" active>Stock Tracker</Nav.Link>
          <Nav.Link href="/Budget" active>Budget</Nav.Link>
          <NavDropdown title="Select Trackers" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Expense">Expense</NavDropdown.Item>
            <NavDropdown.Item href="/Income">Income</NavDropdown.Item>
            <NavDropdown.Item href="/Savings">Savings</NavDropdown.Item>
            <NavDropdown.Item href="/SavingsGoal">Savings Goals</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form onSubmit={handleSearchSubmit} className="ml-auto d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="success" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
