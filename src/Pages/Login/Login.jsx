import "../../Styles/login.css";
import React, { useState } from "react";
import Dropdown from "../../Components/dropdown/dropdownComponent";
import * as yup from "yup";
import { validations } from "../../validations.jsx";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from "axios";
import Img from "../../Assets/backgroundimage.jpg";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Components/header/header";
import LoadingAnimation from "../../Components/loadingAnimation";
import { useSelector, useDispatch } from "react-redux";

import { BiBorderRadius } from "react-icons/bi";

function Login({ logado = false }) {
  const [waiting, setWaiting] = useState(false);
  const [invalidUser, setinvalidUser] = useState("");
  const LoginREQURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserLogin";
  const [nationalCode, setnationalCode] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [token, setUserToken] = useState("");
 
  // const onLoginPressed = async (e) => {
  //   e.preventDefault();
  //     setWaiting(true)
  //     const user = {
  //       "nationalCode": mobile.value,
  //       "password": password.value
  //     }
  //       axios.post(LoginREQURL, {
  //       mobile: user["mobile"],
  //       password: user["password"]
  //     } )

  //       .then(function (response,r) {

  //           if(response.status === 200){

  //           } else{

  //             console.log("this is invalid user content")
  //             console.log(response)

  //           }
  //       })
  //       .catch(error=>{
  //   setWaiting(false)

  //       }
  //   );
  //     return

  // }

  const handleLogin = ({ values }) => {
    setWaiting(true);
    const user = {
      "nationalCode": nationalCode.value,
      "password": password.value
    }
    axios.post(LoginREQURL, {
      nationalCode: user["nationalCode"],
        password: user["password"]
    }).then((response) => {

      const page = response;
      if (response.status==200){
        setWaiting(false);
      }else{
        setWaiting(false);
        console("sdsdsdsd")
      }
      
      // if (page === true) {
      //   localStorage.setItem('@user', JSON.stringify(response.config.data));
      //   window.location.reload();
      // } else {
      //   alert(response.data.msg);
      //   setWaiting(false)
      // }

    });
  };

  const validationsLogin = yup.object().shape({
    nationalCode: yup
      .string("ادرس ایمیل نباید تنها عدد باشد")
      .email("ایمیل درست نمیباشد")
      .required("ایمیل مورد نیاز است"),
    phone: yup
      .number("تلفن همراه نباید حروف داشته باشد")

      .typeError("فرمت شماره همراه اشتباه است")

      .positive("شماره همراه نمیتواند منفی داشته باشد")

      .integer("شماره همراه صحیح نمیباشد")

      .min(12, "شماره باید دوازده رقم باشد")

      .required("شماره همراه مورد نیاز است"),
    password: yup
      .string()
      .min(8, "اندازه رمز عبور حداقل باید 8 کاراکتر باشد")
      .required("رمز عبور نباید خالی باشد"),
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
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="login-form">
{/* -------------------------  NationCode------------------------- */}

              <div className="form-group">
                {/*ایمیل یا کد ملی  */}
                <div className="form-group">
                  <Field
                    name="nationalCode"
                    onChange={ (st) => {
                      let value = st.target.value;
                      setnationalCode({ value: value, error: "" });
                      }}
                    className="form-field"
                    placeholder="کدملی/کدشناسایی/کد اقتصاد"
                  />

                  <ErrorMessage
                    component="span"
                    name="nationalCode"
                    className="form-error"
                  />
                </div>
              </div>
{/* -------------------------  password------------------------- */}


              <div className="form-group">

                <Field
                  name="password"
                  type="password"
                  className="form-field"
                  onChange={ (st) => {
                    let value = st.target.value;
                    setPassword({ value: value, error: "" });
                    }}
                  
                  placeholder="رمز عبور"
                />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <div className="form-group" style={{}}>
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
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
