import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Avatar } from "primereact/avatar";
import { SlideMenu } from "primereact/slidemenu";
import "primeflex/primeflex.css";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import Navbar from "../../Components/navbars/Navbar";
import AvaTarImage from "../../Assets/DashboardAsset/detailExpert.jpg";
import UpdateForm from "./UpdateForm";
import RRImage from "../../Assets/NewReqImage.jpg";
function UpdateUserInfo() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const menu = useRef(null);
  const dispatch = useDispatch();

  const toastBC = useRef(null);
  const SubscribedUserafter = useSelector(
    (state) => state.persistedReducer.LoginReducers.nationalCode
  );

  return (
    <div
      style={{
        direction: "rtl",
        backgroundImage: `url(${RRImage})`,
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="grid col-12    " style={{ height: "100vh" }}>
        <div className="  fadeinleft animation-duration-500  align-items-center justify-content-center col-12 md:col-6 lg:col-6">
          <Avatar
            image={AvaTarImage}
            label="P"
            shape="circle"
            style={{ width: "60vh", height: "60vh" }}
          />
        </div>
        <div className="fadeinleft animation-duration-500  align-items-center justify-content-center  col-12 md:col-6 lg:col-6">
          <UpdateForm />
        </div>
      </div>
    </div>
  );
}

export default UpdateUserInfo;
