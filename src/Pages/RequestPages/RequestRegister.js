import React, { useState, useRef } from "react";
import Navbar from "../../Components/navbars/Navbar";
import Form from "react-bootstrap/Form";
import BachlorsTable from "../../Components/Tables/BachlorsListTable";
import { Button } from "react-bootstrap";
import NewReqForm from "./NewReqForm";
import "./RegisterPage.css";
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import Profile from "../../Components/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import ExpertList from "./ExpertListForNewReq";
import DetailedReq from "./DetailedReq";
import FinalStepNewReq from "./FinalStepNewReq";

function RequestRegister() {
   const dispatch = useDispatch();
  // dispatch(allActions.userActions.login(userData));
  const GlobalactiveIndex = useSelector(
    (state) => state.NewReqReducer.activeIndex
  );
   const items = [
    {
      label: "اطلاعات اولیه",
    },

    {
      label: "انتخاب کارشناس",
    },
    {
      label: "جزئیات درخواست",
    },
    {
      label: "تایید نهایی ",
    },
  ];
  return (
    <div style={{ direction: "rtl" }}>
      <Navbar />
      <Steps model={items} activeIndex={GlobalactiveIndex} />
      {GlobalactiveIndex == 0 ? (
        <NewReqForm />
      ) : GlobalactiveIndex == 1 ? (
        <ExpertList/>
      ) : GlobalactiveIndex == 2 ? (
        <DetailedReq/>
      ) : GlobalactiveIndex == 3 ? (
       <FinalStepNewReq/>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RequestRegister;
