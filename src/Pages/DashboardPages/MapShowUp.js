import React from "react";
import '../../Styles/dashboard.css';
import Header from "../../Components/header/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function MapShowUp() {

    return(
 
  <Container style={{height:'70vh',backgroundColor:'lightcyan'}} fluid="true">

  
      <Row >
       
      <Col lg={true}> Map </Col>
      
 
      </Row>
 
 
        </Container> 
     
    );
}

export default MapShowUp;