import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import DateAndTime from "./DateAndTime";
import Profile from "../Components/profile/profile";
import { Avatar } from "primereact/avatar";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";
// const DateURL = 'http://api.codebazan.ir/time-date/?td=all'

// const getDate = () => {
//   return new Promise((resolve, reject) =>
//   fetch('http://api.codebazan.ir/time-date/?td=all')
//   .then((data) => resolve(data.json()))
//       .catch((err) => reject(err))
//   );
// }
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  // const [Date, setDate] = React.useState();
  //   useEffect(() => {
  //     getDate().then((data) => setDate(data));
  //     console.log(Date)

  // }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar" style={{ padding: "5px", height: "7.5vh" }}>
          <Link to="#" className="menu-bars" style={{ fontSize: "1rem" }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          
          <div >
            <Profile />
          </div>
          <div className="dateandtime">
            <DateAndTime />
          </div>
        </div>

        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{
            direction: "rtl",
            position: "fixed",
            zIndex: "9999",
            paddingRight: "10px",
          }}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  style={{ width: " 120%" }}
                  key={index}
                  className={item.cName}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
