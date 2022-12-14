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
function FinalStepNewReq() {
    const dispatch = useDispatch();
    const selectedStateID = useSelector(
      (state) => state.NewReqReducer.stateID
    );
    const selectedCityID = useSelector(
      (state) => state.NewReqReducer.cityID
    );
   
  return (
    <>
 <Button onClick={()=>{
 dispatch(allActions.NewReqActions.FourthFormSubmit());

}}>
    تایید
</Button>
<Button 
onClick={()=>{
    dispatch(allActions.NewReqActions.FourthFormBack());
   
   }}>
    برگشت
</Button>
    </>
  );
}

export default FinalStepNewReq;
