import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import DateAndTime from "../DateAndTime";
import Profile from "../profile/profile";
import { Avatar } from "primereact/avatar";
import { Sidebar } from 'primereact/sidebar';
import { Menubar } from 'primereact/menubar';
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
 
import UserDashboardSidebar from '../../Components/sidebards/UserDashboardSidebar'



function Navbar() {
  const items = [
    {
 
      template: (item, options) => {
          return (
               <Profile/>
             
          );
      }
  },
     
    
];
const start =   <UserDashboardSidebar/>;
    const end = <div className="  col-0  md:col-12 lg:col-12  "> <DateAndTime/></div>;
  
  return (
    <>
      <Menubar   model={items} start={start}   end={end} />
    </>
  );
}

export default Navbar;
