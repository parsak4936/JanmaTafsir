import "../../Styles/signup.css";
import Dropdown from "../../Components/dropdown/dropdownComponent";
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

function Signup({ login = false }) {
  const toastBC = useRef(null);

  const [waiting, setWaiting] = useState(false);
  const [userData, setUserData] = useState({
    nationCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const header = <h6>Pick a password</h6>;
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );
  const Show400Errors = () => {
    toastBC.current.show({
      severity: "error",
      summary: " خطایی پیش آمده",
      detail: "خطایی در اطلاعات است.دوباره امتحان کنید",
      life: 3000,
    });
  };
  const Show500Errors = () => {
    toastBC.current.show({
      severity: "error",
      summary: " خطایی پیش آمده",
      detail: "لطفا دوباره امتحان کنید",
      life: 3000,
    });
  };
  

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
              exception.response.status == 400 
            
            ) {
              Show400Errors();
            } else if (exception.response.status == 500) {
             Show500Errors()
            }
          });
      },

      2000
    );
  };

  return (
    <div className="grid c-12">
              <Toast ref={toastBC} position="bottom-center" />

      <div className="right-signup grid c-12">
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
                <h5 style={{ color: "white" }}> نوع کاربری </h5>

                <Dropdown />
              </div>

              {/* -------------------------  Phone number------------------------- */}
              <div className="form-group">
                <h5 style={{ color: "white" }}> شماره تماس </h5>

                <Field
                  name="phoneNumber"
                  className="form-field"
                  onChange={handlechange}
                  placeholder="شماره تلفن همراه"
                />

                {phonenumberValidation == true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}> شماره تلفن درست نمیباشد </div>
                )}
              </div>
              {/* -------------------------  NationCode------------------------- */}

              <div className="form-group">
                <h5 style={{ color: "white" }}> کد ملی </h5>

                <Field
                  name="nationCode"
                  onChange={handlechange}
                  className="form-field"
                  placeholder="کدملی/کدشناسایی/کد اقتصاد"
                />
                {nationcodeValiation == true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}> کد ملی درست نمیباشد </div>
                )}
              </div>
              {/* -------------------------  Password ------------------------- */}

              <div className="form-group">
                <h5 style={{ color: "white" }}> رمز عبور </h5>

                <Password
                  name="password"
                  toggleMask
                  header={header}
                  footer={footer}
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
                <h5 style={{ color: "white" }}>تکرار رمز عبور </h5>
                <Password
                  name="confirmPassword"
                  toggleMask
                  header={header}
                  footer={footer}
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
                {nationcodeValiation == false ||
                passwordValidation == false ||
                phonenumberValidation == false ||
                nationcodeValiation == false ? (
                  <Button
                    className="button button align-items-center justify-content-center"
                    disabled
                  >
                    تایید
                  </Button>
                ) : (
                  <>
                    {waiting == false ? (
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
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
