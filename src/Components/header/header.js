import React, { Component, useState } from "react";

import "./Header.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Features from "../../Pages/DashboardPages/dashboardFeatures";
import "primeflex/primeflex.scss";

import { InputText } from "primereact/inputtext";

import LandingPageSide from "../sidebards/LandingPageSide";
import { Button } from "primereact/button";

function Header() {
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap App-Header grid   
     sm:h-auto 
    md:h-auto 
    lg:h-screen 
    xl:h-screen
     ">
      <div
        className="   navbar navbar-expand-lg flex flex-row p-6 h-full grid navbar-scroll  "
        style={{ direction: "rtl" }}
        expand="lg"
      >
        <div className=" align-items-center justify-content-center     col-6  md:col-6 lg:col-6   ">
          سامانه جانماتفسیر
        </div>

        <div className=" fadeinleft animation-duration-500    col-6 md:col-6 lg:col-6">
          <div className="grid col-12  flex flex-row-reverse ">
            {SubscribedUser === true ? (
              <Button
                
               
                label="ورود به سامانه"
                onClick={() => {
                  navigate("/MapView");
                }}
              />

            ) : (
              <Button
                
                label="ورود به سامانه"
                onClick={() => {
                  navigate("/Login");
                }}
              />

            )}
          </div>
        </div>

        <div className="grid align-items-center justify-content-center">
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Header;
