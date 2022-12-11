import "../../Styles/login.css";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field, useFormik, useField } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Components/header/header";
import LoadingAnimation from "../../Components/loadingAnimation";
import Footer from "../../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
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
              // console.log(response.data.data.token)
              setWaiting(false);
              dispatch(allActions.userActions.login(userData));

              // localStorage.setItem(
              //   "@userData",
              //   JSON.stringify(SubscribedUserafter)
              // );

              if (SubscribedUser == true) {
                navigate("/MapView");
              } else {
                navigate("/Login");
              }
            }
 
          })
          .catch((exception) => {
            setWaiting(false);
           
            if(exception.response.status==400 ||exception.response.status==404 ){
              alert("اطلاعات وارد شده درست نمیباشد")
            }
            else if(exception.response.status==500){
              alert("دوباره امتحان کنید ")
            }
              
           
          });
      },

      2000
    );
  };

  return (
    <>
      <Container fluid="true">
        <Col
          style={{
            height: "100vh",
          }}
        >
          <Row>
            <Header />
          </Row>
          <Row className="right-login">
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
                      <Field
                        name="password"
                        id="Password"
                        type={"password"}
                        onChange={handlechange}
                        value={userData.password}
                        className="form-field"
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

                    {/* -------------------------   ------------------------- */}

                    <div className="form-group" style={{}}>
                      {nationcodeValiation == false ||
                      passwordValidation==false  ? (
                        <Button className="button" type="submit" disabled>
                          تایید
                        </Button>
                      ) : (
                        <>
                          {waiting == false ? (
                            <button
                              className="button"
                              type="submit"
                               
                            >
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
                )}
              </Formik>
            </div>
          </Row>

           
        </Col>
      </Container>
    </>
  );
}

export default Login;
