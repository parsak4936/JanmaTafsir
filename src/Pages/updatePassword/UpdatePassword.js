import "../../Styles/login.css";
import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import Spiner from "../../Components/spiner/spiner";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import LoginBackGroundImg from "../../Assets/DashboardAsset/bg3.jpg";
import { Message } from "primereact/message";
import Navbar from "../../Components/navbars/Navbar";
import {
  Show400Errors,
  Show500Errors,
  Show404Errors,
  ShowSucessMsg,
  ShowTokenErrors,
  ShowNetorkErrors,
} from "../../Components/ShowErrors/ShowErrors";

import { Toast } from "primereact/toast";
function UpdatePassword() {
  const [waiting, setWaiting] = useState(false);

  const navigate = useNavigate();
  const UpdatePasswordURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UpdatePasswordWithOutForget";

  const [usernewPassword, setusernewPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmnewPassword: "",
  });
  const Token = useSelector(
    (state) => state.persistedReducer.LoginReducers.Token
  );
  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };

  const dispatch = useDispatch();
  const toastBC = useRef(null);

  const handlechange = (e) => {
    setusernewPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    setWaiting(true);

    setTimeout(
      () => {
        axios
          .post(
            UpdatePasswordURL,
            {
              password: usernewPassword.newPassword,
              oldPassword: usernewPassword.oldPassword,
              confirmPassword: usernewPassword.confirmnewPassword,
            },
            config
          )
          .then((response) => {
            if (response.data.statusCode == 200) {
              setWaiting(false);

              ShowSucessMsg(toastBC);
            }
          })
          .catch((exception) => {
            setWaiting(false);
            if (exception.response.status == 400) {
              Show400Errors(toastBC);
            } else if (exception.response.status == 404) {
              Show404Errors(toastBC);
            } else if (exception.response.status == 500) {
              Show500Errors(toastBC);
            } else if (exception.response.status === 401) {
              ShowTokenErrors(toastBC);
            } else if (exception.code === "ERR_NETWORK") {
              ShowNetorkErrors(toastBC);
            }
          });
      },

      2000
    );
  };
  //=============Validation====================
  var passwordValidation = false;

  if (usernewPassword.oldPassword.length >= 8) {
    passwordValidation = true;
  }
  var newpasswordValidation = false;

  if (usernewPassword.newPassword.length >= 8) {
    newpasswordValidation = true;
  }

  var confirmpasswordValidation = false;

  if (usernewPassword.confirmnewPassword == usernewPassword.newPassword) {
    confirmpasswordValidation = true;
  }

  //================================

  return (
    <div style={{ direction: "rtl" }}>
      <Navbar />
      <div className="grid a">
        <Toast ref={toastBC} position="bottom-center" />

        <div className=" grid col-6 right-login ">
          <div className="card-login">
            <h1>تغییر پسورد </h1>

            <Formik initialValues="" onSubmit={onSubmit}>
              <Form className="login-form">
                {/* -------------------------  OldPassword------------------------- */}

                <div className="form-group">
                  <Field
                    style={{ color: "black" }}
                    name="oldPassword"
                    id="NationCode"
                    type="text"
                    onChange={handlechange}
                    // value={formik.values.NationCode}
                    className="form-field"
                    value={usernewPassword.oldPassword}
                    placeholder=" رمز قبلی"
                  />
                    {passwordValidation == true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                             رمز وارد شده باید بیشتر از هشت حرف داشته باشد       {" "}
                      </div>
                    )}  
                
                </div>
                {/* -------------------------  newPassword ------------------------- */}

                <div className="form-group">
                  <label form="email" className="text-black">
                    {" "}
                    رمز جدید
                  </label>

                  {/* <label form="email">Confirme sua senha</label> */}
                  <Password
                    toggleMask
                    name="newPassword"
                    id="nPassword"
                    type={"password"}
                    onChange={handlechange}
                    style={{ color: "black" }}
                    value={usernewPassword.newPassword}
                    className="form-field"
                  />
                   {newpasswordValidation == true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                             رمز وارد شده باید بیشتر از هشت حرف داشته باشد       {" "}
                      </div>
                    )}  
                </div>

                {/* ------------------------- confirm new PAssword  ------------------------- */}
                <div className="form-group">
                  <label form="email" className="text-black">
                    {" "}
                    تکرار رمز جدید
                  </label>
                  <Password
                    toggleMask
                    name="confirmnewPassword"
                    id="cPassword"
                    placeholder=" تکرار رمز  قبلی"
                    type={"password"}
                    onChange={handlechange}
                    style={{ color: "black" }}
                    value={usernewPassword.confirmnewPassword}
                    className="form-field"
                  />
                 {confirmpasswordValidation == true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                            باید با رمز وارد شده برابر باشد  {" "}
                      </div>
                    )}  
                </div>

                {/* -------------------------   ------------------------- */}

                <div className="form-group" style={{}}>
                  {waiting == false ? (
                    <button className="button align-items-center justify-content-center">
                      تایید
                    </button>
                  ) : (
                    <button className="button align-items-center justify-content-center">
                      <Spiner />
                    </button>
                  )}
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
