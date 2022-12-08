import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import "./profile.scss";
import { IconContext } from "react-icons";
import { PopupMenu } from "react-simple-widgets";

import user from '../../Assets/Icons/user.png';
import edit from '../../Assets/Icons/edit.png';
import inbox from '../../Assets/Icons/envelope.png';
import settings from '../../Assets/Icons/settings.png';
import help from '../../Assets/Icons/question.png';
import logout from '../../Assets/Icons/log-out.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Profile() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const SubscribedUserafter = useSelector(
    (state) => state.rootReducer.LoginReducers.normalusers.nationalCode);
    console.log(SubscribedUserafter)
  return (
    <>
      
         <PopupMenu >
          <button className="btn btn-primary">
            <small>Menu</small>
          </button>

          <div className="card text-start"  style={{}}>
            <div className="card-body px-4 py-4" style={{}} >
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>K</span>
              </div>

              <h5 className="text-center mb-0">{SubscribedUserafter}</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Change Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Pending Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Other Requests</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      

 
     
 
      
    </>
  );
}
  
export default Profile;