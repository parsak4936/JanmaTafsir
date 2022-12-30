import React, { useState } from "react";
 import "primeflex/primeflex.scss";
 
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
 import { Button } from "primereact/button";
import BachlorsTable from "../../Components/Tables/BachlorsListTable";
function ExpertList() {
 
    const dispatch = useDispatch();

  return (
    <>
    <BachlorsTable/>
 
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
