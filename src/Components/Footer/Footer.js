import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function Footer() { 
    const year = new Date().getFullYear();
    return(
  <Container    fluid="true">

  
      <Row style={{
        position: 'fixed',
        backgroundColor: 'gray',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '11px',
        textAlignalign: 'center',
  }} >
       
      <Col lg={true}> <footer style={{textAlign:'center'}}>{`Copyright © Upbeat Code ${year}`}</footer> </Col>
      
 
      </Row>
 
 
        </Container> 
     
    );
}

export default Footer;