import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./profile.css";
import { IconContext } from "react-icons";

import user from '../../Assets/Icons/user.png';
import edit from '../../Assets/Icons/edit.png';
import inbox from '../../Assets/Icons/envelope.png';
import settings from '../../Assets/Icons/settings.png';
import help from '../../Assets/Icons/question.png';
import logout from '../../Assets/Icons/log-out.png';
import { Link } from "react-router-dom";
function Profile() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
 
 console.log(sidebar)
    
  return (
    <>
     <div className='menu-container'  >
     
        <div className="menu-trigger" onClick={showSidebar} >
       
            <img src={user}></img>
    
        </div>

        <div className={`dropdown-menu ${sidebar? 'active' : 'inactive'}`}    >
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} text = {"Inbox"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>

 
     
     </div>
      
    </>
  );
}
function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
export default Profile;
