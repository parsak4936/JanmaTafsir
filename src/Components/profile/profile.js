import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Avatar } from "primereact/avatar";
import { SlideMenu } from "primereact/slidemenu";
 
import { Button } from "primereact/button";
function Profile() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const menu = useRef(null);

  const SubscribedUserafter = useSelector(
    (state) => state.persistedReducer.LoginReducers.normalusers.nationalCode
  );
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );

  const dispatch = useDispatch();
  const items = [
    {
      template: (item, options) => {
        return (
          <div className="card-body px-4 py-4" style={{}}>
            <div id="circle-avatar" className="text-center mx-auto mb-4">
              <Avatar size="large" shape="circle" />{" "}
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
              <Button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  dispatch(allActions.userActions.LogOut());

                  navigate("/");
                }}
              >
                <small>Logout</small>
              </Button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      {/* <div className="card text-start" style={{}}>


       </div>
          <div className="card-body px-4 py-4" style={{}}>

            
          </div> */}
      <SlideMenu
        ref={menu}
        easing
        model={items}
        popup
        viewportHeight={320}
        menuWidth={175}
      ></SlideMenu>
      <Avatar
        size="large"
        shape="circle"
        onClick={(event) => menu.current.toggle(event)}
      />
    </>
  );
}

export default Profile;
