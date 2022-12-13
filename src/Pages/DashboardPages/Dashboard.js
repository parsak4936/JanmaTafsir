import React from "react";
import '../../Styles/dashboard.css';
import 'primeflex/primeflex.scss';
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
import Appdescription from "./Appdescription";
import ContactusCard from "../../Components/Cards/ContactusCard";
import Aboutus from "./Aboutus";
 
 function Dashboard() {
  
    return(
 
  <div  className="grid" >
 <GoTopScroll />
  {/* navbar Row */}

  <div className="grid col-12 h-full"   >
       
       <Col><Header/></Col>

     </div>
 {/* features Row */}
    
     <div className="grid col-12 h-full"  style={{height:'100vh'}}>
      
      <Col lg={true}> <Appdescription/></Col>
    </div>
      {/* users Row */}
     <div className="grid col-12 h-full"  style={{height:'100vh'}} >
       <Col lg={true}>  <UserShowUp /></Col>
     </div>
     
<div className="grid col-12 h-full">
  <Aboutus/>
</div>
     <div className="grid col-12 h-full"  style={{height:'100vh'}} > 
     
   فرم ارتباط با ما
     
      
     </div>
     <div className="grid col-12 "    > 
     <Footer/>
     </div>

     
       
         
 
        </div> 
     
    );
}
export default Dashboard;