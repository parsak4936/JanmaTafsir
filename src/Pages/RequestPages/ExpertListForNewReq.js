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
import BachlorsTable from "../../Components/Tables/BachlorsListTable";
function ExpertList() {
    // const selectedStateID = useSelector(
    //     (state) => state.SelectCSReducer
    //   );
    //   console.log(selectedStateID)
    const dispatch = useDispatch();

  return (
    <>
    <BachlorsTable/>
 <Button onClick={()=>{
 dispatch(allActions.NewReqActions.SecondFormSubmit());

}}>
    تایید
</Button>
<Button 
onClick={()=>{
 
    dispatch(allActions.NewReqActions.SecondFormBack());
    
   }}>
    برگشت
</Button>
    </>
  );
}

export default ExpertList;
