import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Form from 'react-bootstrap/Form';
import BachlorsTable from "../../Components/Tables/BachlorsListTable";
import { Button } from "react-bootstrap";
import NewReqForm from "../../Components/Forms/NewReqForm";



function RequestRegister() {
 
  return (
    <div  style={{direction:'rtl' ,}}>
     <Navbar />
    {/* <BachlorsTable /> */}
     <NewReqForm />
     
    </div>
  );
}

export default RequestRegister;
