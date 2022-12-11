import "../../Styles/signup.css";

import Img from "../../Assets/result.svg";
import Dropdown from "../../Components/dropdown/dropdownComponent";
import React, { useState, useEffect, useRef, useCallback } from "react";
// import {ValidationsRegister} from "../../validations";
import axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import Footer from "../../Components/Footer/Footer";
import { Button, Spinner } from "react-bootstrap";

function Signup({ login = false }) {
  const [showPassword, setshowPassword] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [userData, setUserData] = useState({
    nationCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const handlechange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //---------------------Validations------------------//
  const nationCodeRegExp = /^[0-9]{10}$/;
  const phoneRegExp = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;

  var nationcodeValiation = false;
  if (nationCodeRegExp.test(userData.nationCode)) {
    nationcodeValiation = true;
  }
  var phonenumberValidation = false;
  if (phoneRegExp.test(userData.phoneNumber)) {
    phonenumberValidation = true;
  }

  var passwordValidation = false;
  if (userData.password.length >= 6) {
    passwordValidation = true;
  }
  var confirmpasswordValidation = false;
  if (userData.confirmPassword == userData.password) {
    confirmpasswordValidation = true;
  }
  //---------------------------------------//

  const dispatch = useDispatch();
  const userType = useSelector(
    (state) => state.persistedReducer.SignupReducer.normalusers.userType
  );
  console.log(userType)
  
  const SignupURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserRegister";

  const navigate = useNavigate();
  const handleRegister = () => {
    setWaiting(true);
    const user = {
      nationalCode: userData.nationCode,
      phoneNumber: userData.phoneNumber,
      userType: userType,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    };
    setTimeout(
      () => {
        axios
          .post(SignupURL, {
            nationalCode: user["nationalCode"],
            userType: user["userType"],
            phoneNumber: user["phoneNumber"],
            password: user["password"],
            confirmPassword: user["confirmPassword"],
          })
          .then((response) => {
            if (response.data.statusCode == 200) {
              setWaiting(false);
              dispatch(allActions.userActions.Register(userData));
              navigate("/Validation");
            }
          })
          .catch((exception) => {
            setWaiting(false);

            if (
              exception.response.status == 400 ||
              exception.response.status == 404
            ) {
              alert("اطلاعات وارد شده درست نمیباشد");
            } else if (exception.response.status == 500) {
              alert("دوباره امتحان کنید ");
            }
          });
      },

      2000
    );
  };

  return (
    <Container fluid="true">
      <Row>
        <Header />
      </Row>

      {/* <div className="top-signup">
           <Header />
            </div> */}

      <Row className="right-signup">
        <div className="card-signup">
          <div className="user-links">
            <div className="user-link-home">
              {!login && <Link to="/Login">ورود به حساب </Link>}
            </div>
            <div className="user-link-cad">
              <Link to="/signup">ثبت نام</Link>
            </div>
          </div>
          <h1>ثبت نام</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            // validationSchema={ValidationsRegister}
          >
            <Form className="login-form">
              {/* -------------------------  DropDown------------------------- */}

              <div className="form-group">
                <Dropdown />
              </div>

              {/* -------------------------  Phone number------------------------- */}
              <div className="form-group">
                <Field
                  name="phoneNumber"
                  className="form-field"
                  onChange={handlechange}
                  placeholder="شماره تلفن همراه"
                />

{phonenumberValidation == true ? (
                        <div></div>
                      ) : (
                        <div style={{ color: "red" }}>
                          {" "}
                           شماره تلفن درست نمیباشد{" "}
                        </div>
                      )}
              </div>
              {/* -------------------------  NationCode------------------------- */}

              <div className="form-group">
                <Field
                  name="nationCode"
                  onChange={handlechange}
                  className="form-field"
                  placeholder="کدملی/کدشناسایی/کد اقتصاد"
                />
                 {nationcodeValiation == true ? (
                        <div></div>
                      ) : (
                        <div style={{ color: "red" }}>
                          {" "}
                           کد ملی درست نمیباشد{" "}
                        </div>
                      )}
              </div>
              {/* -------------------------  Password ------------------------- */}

              <div className="form-group">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-field   "
                  onChange={handlechange}
                  placeholder="رمز ورود"
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

              {/* ------------------------- Confirm  Password ------------------------- */}

              <div className="form-group">
                <Field
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  className="form-field   "
                  onChange={handlechange}
                  placeholder=" تکرار رمز ورود"
                />
                {confirmpasswordValidation == true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}>
                    {" "}
                  رمز باید با قبلی برابر باشد{" "}
                  </div>
                )}
              </div>

              {/* -------------------------   ------------------------- */}

              <div className="form-group" style={{}}>
                {nationcodeValiation == false || passwordValidation == false || phonenumberValidation == false || nationcodeValiation==false ? (
                  <Button className="button" type="submit" disabled>
                    تایید
                  </Button>
                ) : (
                  <>
                    {waiting == false ? (
                      <button className="button" type="submit">
                        تایید
                      </button>
                    ) : (
                      <Button className="button" type="submit">
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </Button>
                    )}
                  </>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </Row>
      
    </Container>
  );
}

export default Signup;
