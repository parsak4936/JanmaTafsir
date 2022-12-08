import "../../Styles/login.css";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field, useFormik, useField } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Components/header/header";
import LoadingAnimation from "../../Components/loadingAnimation";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
function Login({ logado = false }) {
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();
  const LoginURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserLogin";

  const [userData, setUserData] = useState({
    nationCode: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handlechange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const SubscribedUserafter = useSelector(
    (state) => state.rootReducer.LoginReducers.SubscribedUser
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

              localStorage.setItem(
                "@userData",
                JSON.stringify(SubscribedUserafter)
              );
              navigate('/MapView')
            } else {
              setWaiting(false);
            }
          })
          .catch((exception) => {
            setWaiting(false);
            console.log(exception);
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
                      {errors.NationCode && touched.NationCode ? (
                        <div>{errors.NationCode}</div>
                      ) : null}
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
                    </div>

                    {/* -------------------------   ------------------------- */}

                    <div className="form-group" style={{}}>
                      {waiting == false ? (
                        <button className="button" type="submit">
                          تایید
                        </button>
                      ) : (
                        <button className="button" type="submit">
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </button>
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
