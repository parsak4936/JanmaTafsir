import React, { useState } from "react";
 
import "./Navbar.css";
 
import DateAndTime from "../DateAndTime";
import Profile from "../profile/profile";
 
import { Menubar } from 'primereact/menubar';
 
 
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
    <div  >
      <Menubar   model={items} start={start}   end={end} />
    </div>
  );
}

export default Navbar;
