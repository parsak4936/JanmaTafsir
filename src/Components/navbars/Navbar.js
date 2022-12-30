import React, { useState } from "react";
 
import "./Navbar.css";
 
import DateAndTime from "../DateAndTime";
import Profile from "../profile/profile";
 
import { Menubar } from 'primereact/menubar';
 
 
import UserSidebar from '../../Components/sidebards/UserSidebar'
 
import ExpertSidebar from '../../Components/sidebards/ExpertSidebar'
import AvaTarImage from '../../Assets/DashboardAsset/detailExpert.jpg'
import { useSelector } from "react-redux";



function Navbar() {
  const items = [
    {
 
      template: (item, options) => {
          return (
               <Profile />
             
          );
      }
  },
     
    
];
const UserType = useSelector(
  (state) => state.persistedReducer.LoginReducers.userType
);
//TODO: usertype will change into 1 and 2 instead of 0 and 1
//  console.log(UserType)
const start =()=>{ if (UserType===1){
  return <UserSidebar/> ;
} else if (UserType==2){
  return <ExpertSidebar/> ;
}}

    const end = <div className="  col-0  md:col-12 lg:col-12  "> <DateAndTime/></div>;
  
  return (
    <div  >
      <Menubar   model={items} start={start}   end={end} />
    </div>
  );
}

export default Navbar;
