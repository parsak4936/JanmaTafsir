import "../../Styles/login.css";
import React, { useState } from "react";
import Dropdown from "../../Components/dropdown/dropdownComponent";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field, useFormik, useField } from "formik";
import axios from "axios";
import Img from "../../Assets/backgroundimage.jpg";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Components/header/header";
import LoadingAnimation from "../../Components/loadingAnimation";
import { Button, Container } from "react-bootstrap";
import * as Yup from "yup";
function Login({ logado = false }) {
  const [waiting, setWaiting] = useState(false);
  const [invalidUser, setinvalidUser] = useState("");
  const navigate = useNavigate();
  const LoginURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserLogin";
  const [nationalCode, setnationalCode] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [token, setUserToken] = useState();
  const [acceptTerms, setacceptTerms] = useState(false);
  
//password : string
//code : 4311211945
//number : 09195436287
  
  const formik = useFormik({
    initialValues: {
      NationCode: "",
      Password: "",
      acceptTerms: false,
    },

    onSubmit: (values) => {
      // navigate('/validation',{state:{phoneNumber:phoneNumber.value}});
      //navigate('/validation');
      setnationalCode({ value: values.NationCode, error: "" });
      setPassword({ value: values.Password, error: "" });
      
      setWaiting(true);
      const user = {
        nationalCode: values.NationCode,
        password: values.Password,
      };
      axios
        .post(LoginURL, {
          nationalCode: user["nationalCode"],
          password: user["password"],
        })
        .then((response) => {
          
          if (response.data.statusCode == 200) {
            setUserToken(response.data.data.token)
            setWaiting(false);
            
             navigate('/MapView',{state:{loginToken:response.data.data.token}});
            // console.log("Token:"+response.data.data.token)
            
          } else {
            setWaiting(false);
           
          }
          // if (page === true) {
          //   localStorage.setItem('@user', JSON.stringify(response.config.data));
          //   window.location.reload();
          // } else {
          //   alert(response.data.msg);
          //   setWaiting(false)
          // }
        })
        .catch((exception) => {
          setWaiting(false);
          console.log(exception)
          // if (exception.response.statusCode == 400) {
          //   console.log("404");
          // } else {
          //   console.log(exception.response.status);
          // }
        });
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      style={{
        backgroundImage: "url(" + Img + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="body"
    >
      <div className="left-login">
        {/* adding a table for informations here */}
      </div>

      <div className="right-login">
        <div className="card-login">
          <div className="user-links">
            <div className="user-link-home">
              {!logado && <Link to="/Login">ورود به حساب</Link>}
            </div>

            <div className="user-link-cad">
              {!logado && <Link to="/signup">ثبت نام</Link>}
            </div>
          </div>
          <h1>ورود </h1>

          <Formik
            initialValues={{ NationCode: "", Password: "",acceptTerms: false, }}
            onSubmit={formik.handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="login-form" onSubmit={formik.handleSubmit}>
                {/* -------------------------  NationCode------------------------- */}

                <div className="form-group">
                  <Field
                    name="NationCode"
                    id="NationCode"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.NationCode}
                    className="form-field"
                    placeholder="کدملی/کدشناسایی/کد اقتصاد"
                  />
                  {errors.NationCode && touched.NationCode ? (
                    <div>{errors.NationCode}</div>
                  ) : null}
                </div>
                {/* -------------------------  Password ------------------------- */}

                <div className="form-group">
                  {/* <label form="email">Confirme sua senha</label> */}
                  <Field
                    name="Password"
                    id="Password"
                    type={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                    className="form-field"
                    placeholder="رمز ورود"
                  />
                </div>

                {/* -------------------------   ------------------------- */}
                <label className="text-gray-500 font-bold">
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    // onChange={formik.handleChange}
                    // value={formik.values.checked}
                    className={"form-check-input "}
                    
                  />

                  <span className="text-sm">Accept Terms</span>
                </label>
                 
                <div className="form-group" style={{}}>
                {waiting == false ? (
                  <button
                    className="button"
                    
                    type="submit"
                  >
                    تایید
                  </button>
                ) : (
                  <div>
                    {" "}
                    <LoadingAnimation style={{}} />{" "}
                  </div>
                )}
              </div>
                 
              </Form>
            )}
          </Formik>
          {/* <div className="form-group" style={{}}>
                {waiting == false ? (
                  <button
                    className="button"
                    onClick={handleLogin}
                    type="submit"
                  >
                    تایید
                  </button>
                ) : (
                  <div>
                    {" "}
                    <LoadingAnimation style={{}} />{" "}
                  </div>
                )}
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
