import "../../Styles/signup.css";
import Img from "../../Assets/result.svg";
import Dropdown from "../../Components/dropdown/dropdownComponent";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ValidationsRegister from "../../validations";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Components/header/header";

function Signup({ login = false }) {
  const [showPassword, setshowPassword] = useState(true);
  const [SelectedRole, setSelectedRole] = useState(null);
  const phoneRegExp = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}]/;

  const selectedRolCallBack = useCallback((SelectedRole) => {
    setSelectedRole(SelectedRole);
  }, []); //TODO : Make it redus it has some errors !

  useEffect(() => {
    // Update the document title using the browser API
    console.log(SelectedRole);
  });

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
      window.location.reload();
    });
  };

  return (
    <div className="body">
      {/* <div className="top-signup">
           <Header />
            </div> */}
      <div className="left-signup">
        <img src={Img} alt="Pessoas olhando gráficos" className="chart" />
      </div>
      <div className="right-signup">
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
            validationSchema={ValidationsRegister}
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
      </div>
    </div>
  );
}

export default Signup;
