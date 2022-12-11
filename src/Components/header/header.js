import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";

function Header() {
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
   
  );

  return (
    <Navbar
      className="App-Header"
      style={{ direction: "rtl", paddingLeft: "25px",backgroundColor:'#113059' }}
      collapseOnSelect
      expand="lg"
       
      variant="dark"
    >
      <Navbar.Brand
        className="text-primary  App-logo  "
        style={{ height: "10vmin" }}
        href="/home"
      >
        <span>سامانه ی کارشناسی اراضی</span>
        <span> جانماتفسیر </span>
      </Navbar.Brand>
      {/* <Navbar.Toggle  aria-controls="responsive-navbar-nav">
         
         <i class="bi bi-list"></i>
        </Navbar.Toggle> */}
      <Navbar.Toggle
        style={{ color: "blue" }}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse fluid="true" id="responsive-navbar-nav">
        <Nav className="ml-auto  "> </Nav>

        <Nav>
          {SubscribedUser == true ? (
            <Nav.Link href="/MapView">
              {" "}
              <Button style={{ color: "blue", width: "100px" }} variant="light">
                {" "}
                ورود{" "}
              </Button>{" "}
            </Nav.Link>
          ) : (
            <Nav.Link href="/Login">
              {" "}
              <Button style={{ color: "blue", width: "100px" }} variant="light">
                {" "}
                ورود{" "}
              </Button>{" "}
            </Nav.Link>
          )}

          <Nav.Link eventKey={2} href="/Signup">
            <Button
              style={{ color: "blue", width: "100px" }}
              variant="outline-primary"
            >
              ثبت نام
            </Button>
            {""}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
