import React from "react";
import "../../Styles/dashboard.css";
import Header from "../../Components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function UserShowUp() {
  return (
    <Container style={{ height: "50vh", paddingRight: "80px",paddingLeft: "80px" }} fluid="true">
      <Row>کاربران</Row>
      <Row>
        <Col
          style={{ textAlign: "right", alignItems: "center", direction: "rtl" }}
          lg={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </Col>
        <Col
          style={{
            paddingLeft:'80px'
          }}
          lg={true}
        >
          {" "}
          <div
            class="square"
            style={{
                 height: "40vh", 
                 width: "20px",
                backgroundColor: "#555",
             }}
          >
            {" "}
            فاصله
          </div>
        </Col>
        <Col
          style={{ textAlign: "right", alignItems: "center", direction: "rtl" }}
          lg={true}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default UserShowUp;
