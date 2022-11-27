import React from "react";
import '../../Styles/dashboard.css';
import Header from "../../Components/header/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Features from "./dashboardFeatures";
import DetailedFatures from './DetailedFatures'
import UserShowUp from "./UserShowUp";
import Footer from "../../Components/Footer/Footer";
import MapShowUp from "./MapShowUp";
import GoTopScroll from "../../Components/GoTop/goTopScroll";
 
 function Dashboard() {

    return(
 
  <Container  fluid="true">
 <GoTopScroll />
  {/* navbar Row */}
      <Row   style={{height:'10vh'}}>
       
        <Col><Header/></Col>
 
      </Row>
  {/* features Row */}
      <Row  >
       
        <Col lg={true}><Features /></Col>
       
      </Row>

       {/* users Row */}
      <Row style={{height:'70vh'}} >
       
        <Col lg={true}>  <UserShowUp /></Col>
      </Row>
     
       {/* detailed / iconicfeatures Row */}
      <Row>
       
        <Col lg={true}> <DetailedFatures/></Col>
      </Row>
       {/* mapdetails Row */}
      <Row>

        <Col lg={true}><MapShowUp /></Col>
      </Row>
        {/* footer Row */}
       
        <Row>
       
        <Col lg={true}><Footer/></Col>
      </Row>
 
        </Container> 
     
    );
}
export default Dashboard;