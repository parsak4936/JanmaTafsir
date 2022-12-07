import "../../Styles/signup.css";
 
import Img from "../../Assets/result.svg";
import Dropdown from "../../Components/dropdown/dropdownComponent";
import React, { useState, useEffect, useRef, useCallback } from "react";
// import {ValidationsRegister} from "../../validations";
import axios from "axios";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import Header from "../../Components/header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Signup({ login = false }) {
  const [showPassword, setshowPassword] = useState(true);
  const [waiting, setWaiting] = useState(false);

  const SignupURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserRegister";
  const [SelectedRole, setSelectedRole] = useState({ name: null, code: null});
  const [nationalCode, setnationalCode] = useState({ value: "", error: "" });
  const [phoneNumber, setphoneNumber] = useState({ value: "", error: "" });
  const [password, setpassword] = useState({ value: "", error: "" });
  const [confirmPassword, setconfirmPassword] = useState({ value: "", error: "" });
  const navigate = useNavigate();
  const selectedRolCallBack = useCallback((SelectedRole) => {
    setSelectedRole(SelectedRole);
  }, []); //TODO : Make it redus it has some errors !
  // const errors = ValidationsRegister(name, email, password);
  useEffect(() => {
    // Update the document title using the browser API
 
  });

  const handleRegister = async(values) => {
    setWaiting(true);
    navigate('/validation',{state:{phoneNumber:phoneNumber.value}});
    const user = {
      "nationalCode": nationalCode.value,
      "phoneNumber": phoneNumber.value,
      "userType": SelectedRole.code,
      "password": password.value,
      "confirmPassword": confirmPassword.value
    }
    axios.post(SignupURL, {
      nationalCode: user["nationalCode"],
      userType: user["userType"],
      phoneNumber: user["phoneNumber"],
      password: user["password"],
      confirmPassword: user["confirmPassword"]
    }).then((response) => {
      
      
 
      // if (page === true) {
      //   localStorage.setItem('@user', JSON.stringify(response.config.data));
      //   window.location.reload();
      // } else {
      //   alert(response.data.msg);
      //   setWaiting(false)
      // }

    }).catch((exception) => {
      setWaiting(false);
      if (exception.response.status == 404) {
        console.log("404");
      } else {
        console.log(exception.response.status);
      }
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
                <Dropdown parentCallback={selectedRolCallBack} />
              </div>

              {/* -------------------------  Phone number------------------------- */}
              <div className="form-group">
                {/* <label form="email">رمز</label> */}
                <Field
                  name="PhoneNumber"
                  className="form-field"
                  onChange={ (st) => {
                    let value = st.target.value;
                    setphoneNumber({ value: value, error: "" });
                    }}
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
                {/* <label form="email">رمز</label> */}
                <Field
                  name="NationCode"
                  onChange={ (st) => {
                    let value = st.target.value;
                    setnationalCode({ value: value, error: "" });
                    }}
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
                {/* <label form="email">Confirme sua senha</label> */}
                <Field
                  name="Password"
                  type={showPassword ? "text" : "password"}
                  className="form-field   "
                  onChange={ (st) => {
                    let value = st.target.value;
                    setpassword({ value: value, error: "" });
                    }}
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
                {/* <label form="email">Confirme sua senha</label> */}
                <Field
                  name="Password_confirmation"
                  type={showPassword ? "text" : "password"}
                  className="form-field   "
                  onChange={ (st) => {
                    let value = st.target.value;
                    setconfirmPassword({ value: value, error: "" });
                    }}
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
