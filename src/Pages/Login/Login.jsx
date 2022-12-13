import "../../Styles/login.css";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Spiner from "../../Components/spiner/spiner";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Message } from 'primereact/message';
function Login({ logado = false }) {
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();
  const nationCodeRegExp = /^[0-9]{10}$/;
  const LoginURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserLogin";

  const [userData, setUserData] = useState({
    nationCode: "",
    password: "",
  });
  var nationcodeValiation = false;
  if (nationCodeRegExp.test(userData.nationCode)) {
    nationcodeValiation = true;
  }

  var passwordValidation = false;
  if (userData.password.length >= 6) {
    passwordValidation = true;
  }

  const dispatch = useDispatch();
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
              setWaiting(false);
              dispatch(allActions.userActions.login(userData));
              if (SubscribedUser == true) {
                navigate("/MapView");
              } else {
                navigate("/Login");
              }
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
    <>
      <div className="grid"  >
        
          <div className=" grid col-6 right-login">
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

              <Formik initialValues="" onSubmit={onSubmit}>
                {({ errors, touched }) => (
                  <Form className="login-form">
                    {/* -------------------------  NationCode------------------------- */}

                    <div className="form-group">
                      <Field
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
                        <Button className="button align-items-center justify-content-center"  disabled>
                          تایید
                        </Button>
                      ) : (
                        <>
                          {waiting == false ? (
                            <button className="button align-items-center justify-content-center" >
                              تایید
                            </button>
                          ) : (
                            <Button className="button align-items-center justify-content-center" >
                              <Spiner />
                            </Button>
                          )}
                        </>
                      )}
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
