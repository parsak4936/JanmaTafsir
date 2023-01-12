import React, { useState, useRef } from "react";
 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Avatar } from "primereact/avatar";
import { SlideMenu } from "primereact/slidemenu";
import "primeflex/primeflex.css";
import "./profile.css";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import AvaTarImage from '../../Assets/DashboardAsset/detailExpert.jpg'

function Profile() {
  const UserInfoes = useSelector(
    (state) => state.persistedReducer.getInfoReducer
  );

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const menu = useRef(null);
  const dispatch = useDispatch();

  const toastBC = useRef(null);
  const userType = useSelector(
    (state) => state.persistedReducer.LoginReducers.userType
  );
  console.log(userType)
  const showConfirm = () => {
    toastBC.current.show({
      severity: "warn",
      sticky: true,
      content: (
        <div className="flex flex-column" style={{ flex: "1" }}>
          <div className="text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            ></i>
            <h4> خروج از حساب کاربری</h4>
            <p>آیا از خروج خود مطئن هستید؟</p>
          </div>
          <div className="grid p-fluid">
            <div className="col-6">
              <Button
                type="button"
                label="بله"
                onClick={() => {
                  dispatch(allActions.userActions.LogOut());

                  navigate("/");
                }}
                className="p-button-success"
              />
            </div>
            <div className="col-6">
              <Button
                type="button"
                label="خیر"
                onClick={() => {
                  toastBC.current.clear();
                }}
                className="p-button-secondary"
              />
            </div>
          </div>
        </div>
      ),
    });
  };

  const items = [
    {
      template: (item, options) => {
        return (
          <div className="  mb-0  px-4 as  " style={{fontFamily:'IRANSansWeb'}}>
            <Toast ref={toastBC} position="bottom-center" />
            <div
              id="circle-avatar"
              className="text-center  align-items-center p-1   justify-content-center w-full"
            >
             
              <Avatar label="P " image={AvaTarImage} size="large" shape="circle" />{" "}
            </div>

            <h5 className="text-center   align-items-center p-1   justify-content-center w-full">
              {" "}
              {UserInfoes.lastName} {UserInfoes.firstName}
            </h5>
            <p className="text-center  align-items-center p-1   justify-content-center w-full">
              {UserInfoes.nationalCode}{" "}
            </p>

            <hr />

            <p
              className="  align-items-center p-1   justify-content-center w-full"
              style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
            >
              اطلاعات دیگر
            </p>
            <p
              className="grid col-12  align-items-center p-1   justify-content-center w-full "
              style={{ fontSize: 12 }}
            >
              {/* <p className="grid col-12  align-items-center p-1   justify-content-center ">
                {UserInfoes.userType} نوع کاربرک عادی  {userType}
              </p> */}
              <p className="grid col-6">{UserInfoes.cityName}</p>
              <p className="grid col-6">  {UserInfoes.stateName}</p>
            </p>

            <hr className="mb-0" />

            <div
              className="list-group list-group-flush"
              style={{ margin: "0 -24px 0" }}
            >
              <button
                className="list-group-item list-group-item-action px-4"
                onClick={() => {
                  navigate("/UpdateUserInfo");
                }}
              >
                <small> تغییر اطلاعات</small>
              </button>
            </div>
            <div
              className="list-group list-group-flush"
              style={{ margin: "0 -24px 0" }}
            >
              <button
                className="list-group-item list-group-item-action px-4"
                onClick={() => {
                  navigate("/UpdatePassword");
                }}
              >
                <small> تغییر رمز عبور </small>
              </button>
            </div>


            <hr style={{ margin: "0 -24px 24px" }} />

            <div className="d-grid ">
              <Button
                className="btn btn-secondary align-items-center     justify-content-center"
                type="button"
                onClick={showConfirm}
              >
                <small>خروج از حساب </small>
              </Button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="">
        <SlideMenu
          ref={menu}
          easing
          model={items}
          popup
          viewportHeight={320}
        ></SlideMenu>
        <Avatar
          // image={UserInfoes.profilePhoto}
          image={AvaTarImage}
          size="large"
          shape="circle"
          onClick={(event) => menu.current.toggle(event)}
        />
      </div>
    </>
  );
}

export default Profile;
