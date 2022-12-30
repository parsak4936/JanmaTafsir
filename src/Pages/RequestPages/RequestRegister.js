import React, { useState, useRef } from "react";
import Navbar from "../../Components/navbars/Navbar";

import NewReqForm from "./NewReqForm";
import "./RegisterPage.css";
import { Steps } from "primereact/steps";

import { useDispatch, useSelector } from "react-redux";
import ExpertList from "./ExpertListForNewReq";
import DetailedReq from "./DetailedReq";
import FinalStepNewReq from "./FinalStepNewReq";
import RRImage from "../../Assets/NewReqImage.jpg"
function RequestRegister() {
   const dispatch = useDispatch();
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
    <div style={{direction:"rtl"}}  >
      <Navbar />
      <div style={{
      direction:"rtl",
      backgroundImage: `url(${RRImage})`,
     height:"auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
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
      
    </div>
  );
}

export default RequestRegister;
