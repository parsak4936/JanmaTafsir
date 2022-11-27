import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserDashboard from "./Pages/UserDashboards/UserDashboard"
import Login from "./Pages/Login"
import Dashboard from "./Pages/DashboardPages/Dashboard"
import Signup from "./Pages/signup";
import Notfoundpage from "./Pages/notfoundpage";
function App() {
  const logado = localStorage.getItem('@user');

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //   </header>
    // </div>
    <BrowserRouter>
            <Routes>
              <Route path="/home" exact element={<Dashboard />}/>
              <Route path="/" exact element={<Dashboard />}/>

              <Route path="*" element={<Notfoundpage />} />
                {!logado && <Route path="/Login" element={<Login logado={logado} />} />}
                {!logado && <Route path="/Signup" element={<Signup logado={logado} />} />}
                {!logado && <Route path="/userDashboard" element={<UserDashboard logado={logado} />} />}

            </Routes>
        </BrowserRouter>
  );
}

export default App;
