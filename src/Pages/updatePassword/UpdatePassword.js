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
import LoginBackGroundImg from '../../Assets/DashboardAsset/bg3.jpg'
import { Message } from "primereact/message";
import Navbar from "../../Components/navbars/Navbar"
import {
  Show400Errors,
  Show500Errors,
  Show404Errors,
} from "../../Components/ShowErrors/ShowErrors";

import { Toast } from "primereact/toast";
function UpdatePassword() {
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
}
   
console.log(usernewPassword)
  const dispatch = useDispatch();
  const toastBC = useRef(null);

  const handlechange = (e) => {
    setusernewPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const onSubmit = () => {
    

    setTimeout(
      () => {
        axios
          .post(UpdatePasswordURL, {
            Password: usernewPassword.newPassword,
            oldPassword: usernewPassword.oldPassword,
            confirmPassword: usernewPassword.confirmnewPassword,

          },config)
          .then((response) => {
            if (response.data.statusCode == 200) {
              console.log("Update Done!");
             
              
            //   dispatch(allActions.userActions.updateUserType(response.data.data.userType));

            //   dispatch(allActions.userActions.login(response.data.data.token));
              //navigate("/MapView");
            }
          })
          .catch((exception) => {
            

            if (exception.response.status == 400) {
              Show400Errors(toastBC);
            } else if (exception.response.status == 404) {
              Show404Errors(toastBC);
            } else if (exception.response.status == 500) {
              Show500Errors(toastBC);
            }
          });
      },

      2000
    );
  };

  return (
    <div style={{direction:'rtl'}}>
     <Navbar/>
      <div
        className="grid a"
         
      >
        <Toast ref={toastBC} position="bottom-center" />

        <div className=" grid col-6 right-login " >
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
                      placeholder="کدملی/کدشناسایی/کد اقتصاد"
                    />
                    
                  </div>
                  {/* -------------------------  newPassword ------------------------- */}

                  <div className="form-group">
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
                     
                  </div>

                  {/* ------------------------- confirm new PAssword  ------------------------- */}
                  <div className="form-group">
                    {/* <label form="email">Confirme sua senha</label> */}
                    <Password
                      toggleMask
                      name="confirmnewPassword"
                      id="cPassword"
                      type={"password"}
                      onChange={handlechange}
                      style={{ color: "black" }}
                      value={usernewPassword.confirmnewPassword}
                      className="form-field"
                    />
                    {/* {passwordValidation == true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                        رمز نباید کمتر از 8 کاراکتر باشد{" "}
                      </div>
                    )} */}
                  </div>

                  {/* -------------------------   ------------------------- */}


                  <div className="form-group" style={{}}>
                    
                          <button className="button align-items-center justify-content-center">
                            تایید
                          </button>
                        
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
