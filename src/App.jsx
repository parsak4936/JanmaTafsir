import React from "react";

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
function App() {
  const logado = localStorage.getItem("@user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Dashboard />} />
        <Route path="/" exact element={<Dashboard />} />

        <Route path="*" element={<Notfoundpage />} />
        {!logado && (
          <Route path="/Signup" element={<Signup logado={logado} />} />
        )}
        {!logado && <Route path="/Login" element={<Login logado={logado} />} />}
        {!logado && (
          <Route
            path="/validation"
            element={<SmsValidation logado={logado} />}
          />
        )}

        {!logado && (
          <Route path="/MapView" element={<MapView logado={logado} />} />
        )}
        {!logado && (
          <Route
            path="/RequestRegister"
            element={<RequestRegister logado={logado} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
