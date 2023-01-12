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
import {
  Show400Errors,
  Show500Errors,
  Show404Errors,
  ShowNetorkErrors,
  ShowTokenErrors,
} from "../../Components/ShowErrors/ShowErrors";

import { Toast } from "primereact/toast";
function Login() {
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();
  const nationCodeRegExp = /^[0-9]{10}$/;
  const LoginURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserLogin";

  const [userData, setUserData] = useState({
    nationCode: "",
    password: "",
    token: "",
  });
  const Token = useSelector((state) => state.persistedReducer.LoginReducers);
   var nationcodeValiation = false;
  if (nationCodeRegExp.test(userData.nationCode)) {
    nationcodeValiation = true;
  }

  var passwordValidation = false;
  if (userData.password.length >= 6) {
    passwordValidation = true;
  }

  const dispatch = useDispatch();
  const toastBC = useRef(null);

  const handlechange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );

 
  const onSubmit = () => {
    setWaiting(true);

    setTimeout(
      () => {
        axios
          .post(LoginURL, {
            nationalCode: userData.nationCode,
            password: userData.password,
          })
          .then((response) => {
            if (response.data.statusCode == 200) {
              
              setWaiting(false);

              dispatch(
                allActions.userActions.updateUserType(
                  response.data.data.userType
                )
              );

              dispatch(allActions.userActions.login(response.data.data.token));
             navigate("/MapView");
            }
          })
          .catch((exception) => {
            setWaiting(false);

            if (exception.response.status === 400) {
              Show400Errors(toastBC);
            } else if (exception.response.status === 500) {
              Show500Errors(toastBC);
            }
            else if (exception.response.status === 401) {
              ShowTokenErrors(toastBC);
            }
            else if (exception.code==="ERR_NETWORK") {
              ShowNetorkErrors(toastBC)
            }
          });
      },

      2000
    );
  };

  return (
    <>
      <div className="grid a">
        <Toast ref={toastBC} position="bottom-center" />

        <div className=" grid col-6 right-login ">
          <div className="card-login shadow-8">
            
            {/* <div className="user-links  " style={{backgroundColor:'#113059'}}>
              <div className="user-link-home" >
                <Link to="/Login">ورود به حساب</Link>
              </div>

              <div className="user-link-cad">
                <Link to="/signup">ثبت نام</Link>
              </div>
            </div> */}
            <h1  className="text-blue-500 m-3"> جانما تفسیر  </h1>

            <Formik initialValues="" onSubmit={onSubmit}>
              {({ errors, touched }) => (
                <Form className="login-form">
                  {/* -------------------------  NationCode------------------------- */}

                  <div className="form-group">
                  <h5 className="text-blue-500"> کد ملی </h5>

                    <Field
                      style={{ color: "black" }}
                      name="nationCode"
                      id="NationCode"
                      type="text"
                      onChange={handlechange}
                      // value={formik.values.NationCode}
                      className="form-field"
                      value={userData.nationCode}
                      placeholder="کدملی/کدشناسایی/کد اقتصاد"
                    />
                    {nationcodeValiation === true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>کد ملی اشتباه میباشد</div>
                    )}
                  </div>
                  {/* -------------------------  Password ------------------------- */}

                  <div className="form-group">
                  <h5 className="text-blue-500"> رمز عبور </h5>


                    <Password
                      toggleMask
                      name="password"
                      id="Password"
                      type={"password"}
                      onChange={handlechange}
                      style={{ color: "black" }}
                      value={userData.password}
                      className="form-field"
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

                  {/* -------------------------   ------------------------- */}

                  <div className="form-group" style={{}}>
                    {nationcodeValiation === false ||
                    passwordValidation === false ? (
                      <Button
                        className="button  bg-blue-300 opacity-70 align-items-center  justify-content-center"
                        disabled
                      >
                        ورود
                      </Button>
                    ) : (
                      <>
                        {waiting === false ? (
                          <button style={{fontFamily:'IRANSansWeb'}} className="button align-items-center text-100  opacity-100 bg-blue-500 justify-content-center">
                            ورود
                          </button>
                        ) : (
                          <Button style={{fontFamily:'IRANSansWeb'}}  className="button align-items-center justify-content-center  bg-blue-500 ">
                            <Spiner />
                          </Button>
                        )}
                      </>
                    )}
                  </div>

                  <div className="form-group align-items-center  no-underline  justify-content-center"   >
                    <Link  className="text-blue-900 no-underline"   to="/ForgetPassword"
                      onClick={() => {
                        //TODO : navigation to ForgetPassword
                        //URL :
                        //https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/ForgetPassword
                        //inputs : unknown
                        //output : {
                        //   "isSuccess": true,
                        //   "statusCode": 200,
                        //   "message": "string",
                        //   "data": {
                        //     "token": "string",
                        //     "userType": 1
                        //   }
                        // }
                      }}
                    >
رمز عبورتان را فراموش کرده‌اید؟                    </Link>
                    <Link className="text-blue-900   " to="/Signup" 
                     
                    >
حساب ندارید؟ عضو شوید.                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
