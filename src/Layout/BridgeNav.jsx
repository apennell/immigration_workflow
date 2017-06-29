import React, { Component } from 'react';
import { Nav, NavItem, Navbar, } from 'react-bootstrap';
import './Layout.css';
import logo from '../bridge-logo.png';

const BridgeNav = () => {
	return(
		<Navbar collapseOnSelect fixedTop fluid>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="https://www.bridge.us/"><img src={logo} alt="Logo" /></a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	        <NavItem eventKey={1} href="https://www.bridge.us/">Library</NavItem>
	        <NavItem eventKey={2} href="https://www.bridge.us/">Payments</NavItem>
	        <NavItem eventKey={3} href="https://www.bridge.us/">Dashboard</NavItem>
	        <NavItem eventKey={4} href="https://app.bridge.us/ ">Sign Out</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	);
}

export default BridgeNav;