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
  console.log(Token);
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

  //password : string
  //code : 4311211945
  //number : 09195436287
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
              console.log();
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
    <>
      <div className="grid a">
        <Toast ref={toastBC} position="bottom-center" />

        <div className=" grid col-6 right-login ">
          <div className="card-login">
            <div className="user-links">
              <div className="user-link-home">
                <Link to="/Login">ورود به حساب</Link>
              </div>

              <div className="user-link-cad">
                <Link to="/signup">ثبت نام</Link>
              </div>
            </div>
            <h1>ورود </h1>

            <Formik initialValues="" onSubmit={onSubmit}>
              {({ errors, touched }) => (
                <Form className="login-form">
                  {/* -------------------------  NationCode------------------------- */}

                  <div className="form-group">
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
                    {nationcodeValiation == true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>کد ملی اشتباه میباشد</div>
                    )}
                  </div>
                  {/* -------------------------  Password ------------------------- */}

                  <div className="form-group">
                    {/* <label form="email">Confirme sua senha</label> */}
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
                    {passwordValidation == true ? (
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
                    {nationcodeValiation == false ||
                    passwordValidation == false ? (
                      <Button
                        className="button align-items-center justify-content-center"
                        disabled
                      >
                        تایید
                      </Button>
                    ) : (
                      <>
                        {waiting == false ? (
                          <button className="button align-items-center justify-content-center">
                            تایید
                          </button>
                        ) : (
                          <Button className="button align-items-center justify-content-center">
                            <Spiner />
                          </Button>
                        )}
                      </>
                    )}
                  </div>

                  <div className="form-group" style={{ color: "white" }}>
                    {/* <span style={{color:'red'}}>کلیک کنید</span>   */}
                    <Link
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
                      فراموشی رمز ورود
                    </Link>
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
