import "../../Styles/signup.css";
import UserTypeDropDown from "../../Components/dropdown/userTypeDropDown";
import React, { useRef, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";

import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import Spiner from "../../Components/spiner/spiner";
import { Toast } from "primereact/toast";
import StateDropDownR from "./StateDropDownR";
import CityDropdownR from "./cityDropdownR";
import {
  Show400Errors,
  Show500Errors,
  Show404Errors,
  ShowNetorkErrors,
} from "../../Components/ShowErrors/ShowErrors";

function Signup() {
  const toastBC = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //---------------------Variables------------------//
  const UserSignupURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserRegister";
  const EpertSignupURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/ExpertRegister";
  const selectedStateID = useSelector((state) => state.SignupReducer.stateID);
  const selectedcityID = useSelector((state) => state.SignupReducer.cityID);
  const userType = useSelector((state) => state.SignupReducer.userType);

  const [errors, setErrors] = useState({});
  const [waiting, setWaiting] = useState(false);
  const [userData, setUserData] = useState({
    nationCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    Token: "",
  });
  const [ExpertData, setExpertData] = useState({
    //   "firstName": "string",
    //   "lastName": "string",
    //   "phoneNumber": "string",
    //   "nationalCode": "string",
    //   "password": "stringst",
    //   "confirmPassword": "stringst",
    //   "cityId": 0,
    //   "stateId": 0,
    //   "cityGraduationId": 0,
    //   "stateGraduationId": 0,
    //   "bio": "string",
    //   "activityRange": 0
    nationCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    Token: "",
    cityGraduationId: 1,
    stateGraduationId: 1,
    bio: "",
    activityRange: 1,
  }); //---------------------password popUp Header And Footer------------------//
  console.log(ExpertData);

  const header = <h6> یک رمز برای ورود انتخاب کنید </h6>;
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">پیشنهادات</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>حداقل هشت رقم باشد</li>
        <li>حداقل یک حرف کوچک و یک جرف بزرگ داشته باشد</li>
        <li>علامت داشته باشد</li>
        <li>چند عدد هم درآن وجود داشته باشد</li>
      </ul>
    </React.Fragment>
  );

  const handlechange = (e) => {
    if (userType == 1) {
      setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setExpertData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  //---------------------Validations------------------//
  const nationCodeRegExp = /^[0-9]{10}$/;
  const phoneRegExp = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
  var natsioncodeValiation = false;
  
  if(userType==0){
    if (nationCodeRegExp.test(ExpertData.nationCode)) {
      natsioncodeValiation = true;
    }
  }else{
    if (nationCodeRegExp.test(userData.nationCode)) {
      natsioncodeValiation = true;
    }
  }
  //==================================
  var phonenumberValidation = false;
  if(userType==0){
    if (phoneRegExp.test(ExpertData.phoneNumber)) {
      phonenumberValidation = true;
    }
  }else{
    if (phoneRegExp.test(userData.phoneNumber)) {
      phonenumberValidation = true;
    }
  }
 //=================================
  var passwordValidation = false;
  if(userType==0){
    if (ExpertData.password.length >= 8) {
      passwordValidation = true;
    }
  }else{
    if (userData.password.length >= 8) {
      passwordValidation = true;
    }
  }
 //================================
 
  var confirmpasswordValidation = false;
  if(userType==0){
    if (ExpertData.confirmPassword.length >= 8) {
      confirmpasswordValidation = true;
    }
  }else{
    if (userData.confirmPassword.length >= 8) {
      confirmpasswordValidation = true;
    }
  }
  

  //-------------------Handle Register Request--------------------//
  const handleRegister = () => {
    setWaiting(true);

    if (userType === 1) {
      const user = {
        nationalCode: userData.nationCode,
        phoneNumber: userData.phoneNumber,
        userType: userType,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
        firstname: userData.firstname,
        lastname: userData.lastname,
        stateID: selectedStateID,
        cityID: selectedcityID,
      };
      // {
      //   "firstName": "string",
      //   "lastName": "string",
      //   "phoneNumber": "string",
      //   "nationalCode": "string",
      //   "password": "stringst",
      //   "confirmPassword": "stringst",
      //   "cityId": 0,
      //   "stateId": 0
      // }
      setTimeout(
        () => {
          axios
            .post(UserSignupURL, {
              nationalCode: user["nationalCode"],

              phoneNumber: user["phoneNumber"],
              password: user["password"],
              cityname: user["cityname"],
              statename: user["statename"],
              confirmPassword: user["confirmPassword"],
              stateID: user["stateID"],
              firstname: user["firstname"],
              lastname: user["lastname"],
              cityID: user["cityID"],
            })
            .then((response) => {
              if (response.data.statusCode === 200) {
                setWaiting(false);
                dispatch(allActions.userActions.Register(userData));
                navigate("/Validation");
              }
            })
            .catch((exception) => {
              setWaiting(false);
              dispatch(allActions.userActions.Register(userData));
              navigate("/Validation");
              if (exception.response.status === 400) {
                Show400Errors(toastBC);
              } else if (exception.response.status === 500) {
                Show500Errors(toastBC);
              } else if (exception.code === "ERR_NETWORK") {
                ShowNetorkErrors(toastBC);
              }
            });
        },

        2000
      );
    } else {
      const Expert = {
        nationalCode: ExpertData.nationCode,
        phoneNumber: ExpertData.phoneNumber,
        userType: userType,
        password: ExpertData.password,
        confirmPassword: ExpertData.confirmPassword,
        firstname: ExpertData.firstname,
        lastname: ExpertData.lastname,
        stateID: selectedStateID,
        cityID: selectedcityID,
        cityGraduationId: ExpertData.cityGraduationId,
        stateGraduationId: ExpertData.stateGraduationId,
        bio: ExpertData.bio,
        activityRange: ExpertData.activityRange,
      };
      // EpertSignp
      // {
      //   "firstName": "string",
      //   "lastName": "string",
      //   "phoneNumber": "string",
      //   "nationalCode": "string",
      //   "password": "stringst",
      //   "confirmPassword": "stringst",
      //   "cityId": 0,
      //   "stateId": 0,
      //   "cityGraduationId": 0,
      //   "stateGraduationId": 0,
      //   "bio": "string",
      //   "activityRange": 0
      // }

      setTimeout(
        () => {
          axios
            .post(EpertSignupURL, {
              nationalCode: Expert["nationalCode"],
              phoneNumber: Expert["phoneNumber"],
              cityGraduationId: Expert["cityGraduationId"],
              stateGraduationId: Expert["stateGraduationId"],

              bio: Expert["bio"],

              activityRange: Expert["activityRange"],

              password: Expert["password"],
              cityname: Expert["cityname"],
              statename: Expert["statename"],
              confirmPassword: Expert["confirmPassword"],
              stateID: Expert["stateID"],
              firstname: Expert["firstname"],
              lastname: Expert["lastname"],
              cityID: Expert["cityID"],
            })
            .then((response) => {
              if (response.data.statusCode === 200) {
                setWaiting(false);
                dispatch(allActions.userActions.Register(ExpertData));
                navigate("/Validation");
              }
            })
            .catch((exception) => {
              setWaiting(false);
              dispatch(allActions.userActions.Register(ExpertData));
              // navigate("/Validation");
              if (exception.response.status === 400) {
                Show400Errors(toastBC);
              } else if (exception.response.status === 500) {
                Show500Errors(toastBC);
              } else if (exception.code === "ERR_NETWORK") {
                ShowNetorkErrors(toastBC);
              }
            });
        },

        2000
      );
    }
  };
  //-------------------Render--------------------//

  return (
    <div className="grid c-12 a">
      <Toast ref={toastBC} position="bottom-center" />

      <div className="right-signup grid ">
        <div className="card-signup">
          <div className="user-links">
            <div className="user-link-home">
              <Link to="/Login">ورود به حساب </Link>
            </div>
            <div className="user-link-cad">
              <Link to="/signup">ثبت نام</Link>
            </div>
          </div>
          <h1>ثبت نام</h1>
          <Formik initialValues={{}} onSubmit={handleRegister}>
            <Form className="login-form">
              {/* -------------------------  Phone number------------------------- */}
              <div className="form-group grid col-12">
                <h5 style={{ color: "white" }}> شماره تماس </h5>

                <Field
                  name="phoneNumber"
                  style={{ color: "black" }}
                  className="form-field "
                  onChange={handlechange}
                  placeholder="شماره تلفن همراه"
                />

                {phonenumberValidation === true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}> شماره تلفن درست نمیباشد </div>
                )}
              </div>
              {/* -------------------------  userType ------------------------- */}

              <div className="form-group">
                <h5 style={{ color: "white" }}> نوع کاربری </h5>
                <UserTypeDropDown />
              </div>
              {/* -------------------------  state and city  ------------------------- */}

              <div className="grid col-12">
                <div className="col-6">
                  <div className="form-group ">
                    <h5 style={{ color: "white" }}> استان </h5>
                    <StateDropDownR name="statename" onChange={handlechange} />
                  </div>
                </div>
                <div className="col-6  ">
                  <div className="form-group  ">
                    <h5 style={{ color: "white" }}> شهر </h5>

                    <CityDropdownR />
                  </div>
                </div>
              </div>

              {/* -------------------------  nationCode ------------------------- */}

              <div className="form-group">
                <h5 style={{ color: "white" }}> کد ملی </h5>

                <Field
                  style={{ color: "black" }}
                  name="nationCode"
                  onChange={handlechange}
                  className="form-field"
                  placeholder="کدملی/کدشناسایی/کد اقتصاد"
                />
                {natsioncodeValiation === true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}> کد ملی درست نمیباشد </div>
                )}
              </div>

              {/* ------------------------- firstname and lastname ------------------------- */}

              <div className="grid col-12">
                <div className="col-6">
                  <div className="form-group ">
                    <h5 style={{ color: "white" }}> نام </h5>

                    <Field
                      style={{ color: "black" }}
                      name="firstname"
                      onChange={handlechange}
                      className="form-field"
                      placeholder="نام "
                    />
                  </div>
                </div>
                <div className="col-6  ">
                  <div className="form-group  ">
                    <h5 style={{ color: "white" }}> نام خانوادگی </h5>
                    <Field
                      style={{ color: "black" }}
                      name="lastname"
                      onChange={handlechange}
                      className="form-field"
                      placeholder="نام خانوادگی "
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------- Password ------------------------- */}
              <div className="grid   col-12   ">
                {/* password */}
                <div className="col-12  md:col-6 lg:col-6">
                  <div className="form-group ">
                    <h5 style={{ color: "white" }}> رمز عبور </h5>

                    <Password
                      style={{ color: "black" }}
                      name="password"
                      toggleMask
                      header={header}
                      footer={footer}
                      className="form-field   "
                      onChange={handlechange}
                      placeholder="رمز ورود"
                    />
                    {passwordValidation === true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                        رمز نباید کمتر از 8 کاراکتر باشد{" "}
                      </div>
                    )}
                  </div>
                </div>
                {/* Confirm password */}

                <div className="col-12  md:col-6 lg:col-6">
                  <div className="form-group ">
                    <h5 style={{ color: "white" }}>تکرار رمز عبور </h5>
                    <Password
                      name="confirmPassword"
                      toggleMask
                      style={{ color: "black" }}
                      className="form-field   "
                      onChange={handlechange}
                      placeholder=" تکرار رمز ورود"
                    />
                    {confirmpasswordValidation === true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                        رمز باید با قبلی برابر باشد{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* -------------------------  make expert list different from normal user ------------------------- */}
              {userType == 0 && (
                <div className="form-group">
                  <h5 style={{ color: "white" }}>مخصوص cityGraduationId </h5>
                  <Field
                    name="cityGraduationId"
                    style={{ color: "black" }}
                    className="form-field   "
                    onChange={handlechange}
                    placeholder="    "
                  />
                </div>
              )}
              {userType == 0 && (
                <div className="form-group">
                  <h5 style={{ color: "white" }}>stateGraduationId </h5>
                  <Field
                    name="stateGraduationId"
                    style={{ color: "black" }}
                    className="form-field   "
                    onChange={handlechange}
                    placeholder="    "
                  />
                </div>
              )}
              {userType == 0 && (
                <div className="form-group">
                  <h5 style={{ color: "white" }}>activityRange </h5>
                  <Field
                    name="activityRange"
                    style={{ color: "black" }}
                    className="form-field   "
                    onChange={handlechange}
                    placeholder="    "
                  />
                </div>
              )}
              {userType == 0 && (
                <div className="form-group">
                  <h5 style={{ color: "white" }}>bio </h5>
                  <Field
                    name="bio"
                    style={{ color: "black" }}
                    className="form-field   "
                    onChange={handlechange}
                    placeholder="    "
                  />
                </div>
              )}

              {/* ------------------------- submit Buttons ------------------------- */}

              <div className="form-group" style={{}}>
                {natsioncodeValiation === false ||
                passwordValidation === false ||
                phonenumberValidation === false ||
                natsioncodeValiation === false ? (
                  <Button
                    className="button button align-items-center justify-content-center"
                    disabled
                  >
                    تایید
                  </Button>
                ) : (
                  <>
                    {waiting === false ? (
                      <button className="button button align-items-center justify-content-center">
                        تایید
                      </button>
                    ) : (
                      <Button className="button button align-items-center justify-content-center">
                        <Spiner />
                      </Button>
                    )}
                  </>
                )}
                {/* -------------------------------------------------- */}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
