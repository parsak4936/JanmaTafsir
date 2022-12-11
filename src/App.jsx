import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserDashboard from "./Pages/UserDashboards/UserDashboard"
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/DashboardPages/Dashboard";
import Signup from "./Pages/Register/signup";
import Notfoundpage from "./Pages/notfoundpage";
import SmsValidation from "./Pages/smsValidations/smsValidation";
import MapView from "./Pages/MapView/MapView";
import RequestRegister from "./Pages/RequestPages/RequestRegister";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { LoginReducers } from "./app/reducers/LoginReducers";
import { useState } from "react";
function App() {
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );
  console.log(SubscribedUser)
  // console.log(SubscribedUser)
  // const [SubscribedUser,setSubscribedUser] =  useState();
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('@userData'));
  //   setSubscribedUser(items)

  // }, []);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Dashboard />} />
        <Route path="/" exact element={<Dashboard />} />
        <Route path="*" element={<Notfoundpage />} />
        <Route path="/Signup" element={<Signup />} />
        {SubscribedUser == true ? (
          <Route path="/MapView" element={<MapView />} />
        ) : (
          <Route path="/Login" element={<Login />} />
        )}

        <Route path="/Login" element={<Login />} />

        <Route path="/validation" element={<SmsValidation />} />

        <Route path="/RequestRegister" element={<RequestRegister l />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
