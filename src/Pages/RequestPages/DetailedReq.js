import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "primeflex/primeflex.scss";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
 import SelectLocationAcc from "../../Components/Accordion/SelectLocationAccordion";
import { Button } from "primereact/button";
import ReasonRequest from "../../Components/dropdown/ReasonRequests";
import SubstantialTopics from "../../Components/dropdown/SubstantialTopics";
function DetailedReq() {
    const dispatch = useDispatch();

  return (
    <>
    <ReasonRequest/>
    <SubstantialTopics/>
<Button onClick={()=>{
 dispatch(allActions.NewReqActions.ThirdFormSubmit());

}}>
    تایید
</Button>
<Button 
onClick={()=>{
    dispatch(allActions.NewReqActions.ThirdFormBack());
   
   }}>
    برگشت
</Button>
    </>
  );
}

export default DetailedReq;
