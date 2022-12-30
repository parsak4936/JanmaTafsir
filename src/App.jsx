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
import Navbar from "./Components/navbars/Navbar";
import { useSelector } from "react-redux";
import UpdateUserInfo from "./Pages/UpdateUserInfo/UpdateUserInfo";
import WorkInProgress from "./Pages/WorkProgresses/WorkInProgress";
import WorkCanceled from "./Pages/WorkProgresses/WorkCanceled";
import WorkDone from "./Pages/WorkProgresses/WorkDone";

import WorkPending from "./Pages/WorkProgresses/WorkPending";
import PaymentReports from "./Pages/Payments/PaymentReports";
import UpdatePassword from "./Pages/updatePassword/UpdatePassword";
function App() {
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );

   // console.log(SubscribedUser)
  // const [SubscribedUser,setSubscribedUser] =  useState();
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('@userData'));
  //   setSubscribedUser(items)

  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Dashboard />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/validation" element={<SmsValidation />} />

          {SubscribedUser && <Route path="/MapView" element={<MapView />} />}
          {SubscribedUser && (
            <Route path="/RequestRegister" element={<RequestRegister />} />
          )}
          {SubscribedUser && (
            <Route path="/UpdateUserInfo" element={<UpdateUserInfo />} />
          )}
          {SubscribedUser && (
            <Route path="/UpdatePassword" element={<UpdatePassword />} />
          )}
          {SubscribedUser && (
            <Route path="/WorkInProgress" element={<WorkInProgress />} />
          )}
          {SubscribedUser && <Route path="/WorkDone" element={<WorkDone />} />}
          {SubscribedUser && (
            <Route path="/WorkCanceled" element={<WorkCanceled />} />
          )}
          {SubscribedUser && (
            <Route path="/WorkPending" element={<WorkPending />} />
          )}
          {/* TODO:pending routes :1)FAQs | 2) support */}

          {SubscribedUser && (
            <Route path="/PaymentReports " exact element={<PaymentReports />} />
          )}

          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
