import React from "react";
import "../../Styles/dashboard.css";
import Header from "../../Components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import LeftSign from "../../Assets/DashboardAsset/leftSign.svg";
import RightSign from "../../Assets/DashboardAsset/rightSign.svg";
import Image from "react-bootstrap/Image";
function DetailedFatures() {
  return (
    <Container fluid="true">
      <Container
        style={{
          backgroundImage: `url(${LeftSign})`,
          paddingTop: "250px",
          paddingBottom: "250px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        fluid="true"
      >
        <Row style={{}}>
          <Col lg={true}>
            {" "}
            <Image
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
              roundedCircle
            />
          </Col>
        </Row>

        <Row>
          <Col lg={true}>کاربر حقیقی </Col>
        </Row>

        <Row>
          <Col lg={true}> کاربر حقوقی</Col>
        </Row>
      </Container>

      <Container
        style={{
          backgroundImage: `url(${RightSign})`,
          paddingTop: "450px",
          overflow: "hidden",
          paddingBottom: "380px",
          direction: "rtl",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionsition: "right",
          marginTop: "-260px",
        }}
        fluid="true"
      >
        <Row style={{}}>
          <Col lg={true}> فاصله</Col>
        </Row>

        <Row>
          <Col lg={true}>کاربر حقیقی </Col>
        </Row>

        <Row>
          <Col lg={true}> کاربر حقوقی</Col>
        </Row>
      </Container>
      <Container
        style={{
          backgroundImage: `url(${LeftSign})`,
          paddingTop: "150px",
          paddingBottom: "200px",
          backgroundSize: "contain",

          backgroundRepeat: "no-repeat",
          marginTop: "-260px",
        }}
        fluid="true"
      >
        <Row style={{}}>
          <Col lg={true}> فاصله</Col>
        </Row>

        <Row>
          <Col lg={true}>کاربر حقیقی </Col>
        </Row>

        <Row>
          <Col lg={true}> کاربر حقوقی</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DetailedFatures;
