import React, { Component, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
 const LandingPageSide =()=> {
    const [visibleTop, setVisibleTop] = useState(false);
    const navigate = useNavigate();
    const SubscribedUser = useSelector(
        (state) => state.persistedReducer.LoginReducers.SubscribedUser
      );
     
    return (
      <>
      <Sidebar className="" visible={visibleTop} onHide={() => setVisibleTop(false)}>
      <h3 className=" grid col-12 align-items-center justify-content-center">جانما تفسیر</h3>
      <div className="grid col-12 align-items-center justify-content-center ">
        {SubscribedUser === true ? (
          <Button
            onClick={() => {
              navigate("/MapView");
            }}
            className="p-button-outlined  "
            style={{ color: "blue" }}
          >
            ورود
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigate("/Login");
            }}
            style={{ color: "blue" }}
          >
            ورود
          </Button>
        )}
      </div>
      <div className="grid col-12 align-items-center justify-content-center">
        <Button
          onClick={() => {
            navigate("/Signup");
          }}
          style={{ color: "blue" }}
        >
          ثبت نام
        </Button>
      </div>
    </Sidebar>

    <Button
      style={{ float: "left" }}
     label="ورود به سامانه"
      onClick={() => setVisibleTop(true)}
      className="mr-2"
    /></>
    )
   
}

export default  LandingPageSide