import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar fixed='top' className='App-Header' 
          style={{direction:"rtl"}} 
          collapseOnSelect expand="lg"  bg="transparent"  variant="dark">
      
        <Navbar.Brand className='text-primary  App-logo  ' style={{ height: '10vmin'}} href="/home">سامانه ی کارشناسی دادگستری</Navbar.Brand>
        {/* <Navbar.Toggle  aria-controls="responsive-navbar-nav">
         
         <i class="bi bi-list"></i>
        </Navbar.Toggle> */}
        <Navbar.Toggle style={{color:'blue',}} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{backgroundColor:'blue'}}  fluid="true" id="responsive-navbar-nav">
          <Nav className="ml-auto  ">  </Nav>

          <Nav >
            <Nav.Link href="/Login"> <Button variant="outline-primary">   ورود  </Button> </Nav.Link>
            <Nav.Link eventKey={2} href="/Signup">
            <Button variant="outline-primary">ثبت نام</Button>{''}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
      
    </Navbar>
  );
}

export default Header;