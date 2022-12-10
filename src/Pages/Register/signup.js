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
  
  const dispatch = useDispatch();
  const userType = useSelector(
    (state) => state.SignupReducer.normalusers.userType
  );
  const asd = useSelector(
    (state) => state.SignupReducer.normalusers
  );
 console.log(asd)
  const SignupURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserRegister";

  const navigate = useNavigate();
  const handleRegister = async (values) => {
    setWaiting(true);
    const user = {
      nationalCode: userData.nationCode,
      phoneNumber: userData.phoneNumber,
      userType: userType,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    };
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
       
          console.log(exception.response.status);
         
      });
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

                <ErrorMessage
                  component="span"
                  name="PhoneNumber"
                  className="form-error"
                />
              </div>
              {/* -------------------------  NationCode------------------------- */}

              <div className="form-group">
                <Field
                  name="nationCode"
                  onChange={handlechange}
                  className="form-field"
                  placeholder="کدملی/کدشناسایی/کد اقتصاد"
                />

                <ErrorMessage
                  component="span"
                  name="NationCode"
                  className="form-error"
                />
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

                <ErrorMessage
                  component="span"
                  name="Password"
                  className="form-error"
                />
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

                <ErrorMessage
                  component="span"
                  name="Password_confirmation"
                  className="form-error"
                />
              </div>

              {/* -------------------------   ------------------------- */}
              <button className="button" type="submit">
                تایید
              </button>
            </Form>
          </Formik>
        </div>
      </Row>
    </Container>
  );
}

export default Signup;
