import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Toast } from "primereact/toast";
import "./updateForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";
import Spiner from "../../Components/spiner/spiner";
import {
  Show400Errors,
  Show500Errors,
  Show404Errors,
  ShowNetorkErrors,
  ShowSucessMsg,
  ShowTokenErrors,
} from "../../Components/ShowErrors/ShowErrors";
import UpdateStateDropDown from "./UpdateStateDropDown";
import UpdateCityDropDown from "./UpdateCityDropDown";

const UpdateForm = () => {
  const [waiting, setWaiting] = useState(false);

  const UpdateUserURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UpdateUserInformationData";
  //info needed for Update:
  // {
  //   "firstName": "string",
  //   "lastName": "string",
  //   "phoneNumber": "string",
  //   "nationalCode": "string",
  //   "password": "stringst",
  //   "confirmPassword": "string",
  //   "shabaNumber": 0,
  //   "userType": 1,
  //   "address": "string",
  //   "cityId": 0,
  //   "stateId": 0
  // }
  //Resonse:
  // {
  //   "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  //   "title": "One or more validation errors occurred.",
  //   "status": 400,
  //   "traceId": "00-d060d8a91eec021bd7f016ca37059e8c-ca026c3658ebe5d5-00",
  //   "errors": {
  //     "NationalCode": [
  //       "کدملی معتبر نیست"
  //     ],
  //     "ConfirmPassword": [
  //       "عدم تطابق رمز عبور"
  //     ]
  //   }
  // }
  //-----------------------------
  //200 :
  // {
  //   "isSuccess": true,
  //   "statusCode": 200,
  //   "message": "string"
  // }

  const Token = useSelector(
    (state) => state.persistedReducer.LoginReducers.Token
  );

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };
  const toastBC = useRef(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstname: useSelector(
      (state) => state.persistedReducer.getInfoReducer.firstName
    ),

    lastname: useSelector(
      (state) => state.persistedReducer.getInfoReducer.lastName
    ),
    phoneNumber: useSelector(
      (state) => state.persistedReducer.getInfoReducer.phoneNumber
    ),
    nationalCode: useSelector(
      (state) => state.persistedReducer.getInfoReducer.nationalCode
    ),
    password: "",
    confirmPassword: "",
    address: useSelector(
      (state) => state.persistedReducer.getInfoReducer.address
    ),
    cityId: useSelector(
      (state) => state.persistedReducer.getInfoReducer.cityId
    ),
    stateId: useSelector(
      (state) => state.persistedReducer.getInfoReducer.stateId
    ),
    stateName: useSelector(
      (state) => state.persistedReducer.getInfoReducer.stateName
    ),
    cityName: useSelector(
      (state) => state.persistedReducer.getInfoReducer.cityName
    ),
    userBirthday: "",
  });

  const handlechange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    setWaiting(true);
    const user = {
      nationalCode: userData.nationalCode,
      phoneNumber: userData.phoneNumber,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      firstname: userData.firstname,
      lastname: userData.lastname,
      stateID: userData.stateId,
      cityID: userData.cityId,
      shabaNumber: 0,
    };

    setTimeout(
      () => {
        axios
          .post(
            UpdateUserURL,
            {
              nationalCode: user["nationalCode"],
              shabaNumber: user["shabaNumber"],
              phoneNumber: user["phoneNumber"],
              password: user["password"],
              cityname: user["cityname"],
              statename: user["statename"],
              confirmPassword: user["confirmPassword"],
              stateID: user["stateID"],
              firstname: user["firstname"],
              lastname: user["lastname"],
              cityID: user["cityID"],
            },
            config
          )
          .then((response) => {
            if (response.data.statusCode == 200) {
              // Show400Errors(toastBC);
              setWaiting(false);
              ShowSucessMsg(toastBC);
              // navigate("/MapView");
            }
          })
          .catch((exception) => {
            setWaiting(false);

            if (exception.response.status === 400) {
              Show400Errors(toastBC);
            } else if (exception.response.status === 500) {
              Show500Errors(toastBC);
            }
            else if (exception.response.status === 401) {
              ShowTokenErrors(toastBC);
            }
            else if (exception.code==="ERR_NETWORK") {
              ShowNetorkErrors(toastBC)
            }
          });
      },

      2000
    );
  };
  //================== Validation ==================
  const nationCodeRegExp = /^[0-9]{10}$/;
  const phoneRegExp = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
  var natsioncodeValiation = false;
  if (nationCodeRegExp.test(userData.nationalCode)) {
    natsioncodeValiation = true;
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
  //=========================================
  return (
    <div className="grid c-12 m-6 ">
      <Toast ref={toastBC} position="bottom-center" />

      <div className="right-signup grid    ">
        <div className="card-signup   bg-white">
          <Formik initialValues={{}} onSubmit={onSubmit}>
            <Form className="text-center">
              <div className="">
                <h1 className="  text-blue-500 m-3"> تغییر اطلاعات </h1>
              </div>

              {/* -------------------------  Phone number------------------------- */}

              <div className="form-group grid  col-12">
                <h5 className="text-blue-500"> شماره تماس </h5>

                <Field
                  name="phoneNumber"
                  style={{ color: "black" }}
                  value={userData.phoneNumber}
                  className="form-field "
                  onChange={handlechange}
                  placeholder="شماره تلفن همراه"
                />

                {phonenumberValidation == true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}> شماره تلفن درست نمیباشد </div>
                )}
              </div>
 
              {/* -------------------------  state and city  ------------------------- */}

              <div className="grid col-12">
                <div className="col-6">
                  <div className="form-group ">
                    <h5 className="text-blue-500"> استان </h5>
                    <UpdateStateDropDown
                      name="statename"
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="col-6  ">
                  <div className="form-group  ">
                    <h5 className="text-blue-500"> شهر </h5>

                    <UpdateCityDropDown />
                  </div>
                </div>
              </div>

              {/* -------------------------  nationCode ------------------------- */}

              <div className="form-group">
                <h5 className="text-blue-500"> کد ملی </h5>

                <Field
                  style={{ color: "black" }}
                  name="nationalCode"
                  value={userData.nationalCode}
                  onChange={handlechange}
                  className="form-field"
                  placeholder="کدملی/کدشناسایی/کد اقتصاد"
                />
                {natsioncodeValiation == true ? (
                  <div></div>
                ) : (
                  <div style={{ color: "red" }}> کدملی درست نمی باشد </div>
                )}
              </div>

              {/* ------------------------- firstname and lastname ------------------------- */}

              <div className="grid col-12">
                <div className="col-6">
                  <div className="form-group ">
                    <h5 className="text-blue-500"> نام </h5>

                    <Field
                      style={{ color: "black" }}
                      name="firstname"
                      value={userData.firstname}
                      onChange={handlechange}
                      className="form-field"
                      placeholder="نام "
                    />
                  </div>
                </div>
                <div className="col-6  ">
                  <div className="form-group  ">
                    <h5 className="text-blue-500"> نام خانوادگی </h5>
                    <Field
                      style={{ color: "black" }}
                      name="lastname"
                      value={userData.lastname}
                      onChange={handlechange}
                      className="form-field"
                      placeholder="نام خانوادگی "
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------- Password ------------------------- */}
              <div className="grid   col-12   ">
                {/* password */}
                <div className="col-12  md:col-6 lg:col-6">
                  <div className="form-group ">
                    <h5 className="text-blue-500"> رمز عبور </h5>

                    <Password
                      style={{ color: "black" }}
                      name="password"
                      toggleMask
                     
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
                </div>
                {/* Confirm password */}

                <div className="col-12  md:col-6 lg:col-6">
                  <div className="form-group ">
                    <h5  className="text-blue-500">تکرار رمز عبور </h5>
                    <Password
                      name="confirmPassword"
                      toggleMask
                      style={{ color: "black" }}
                      
                      onChange={handlechange}
                      placeholder=" تکرار رمز ورود"
                    />
                    {confirmpasswordValidation == true ? (
                      <div></div>
                    ) : (
                      <div style={{ color: "red" }}>
                        {" "}
                        باید با رمز قبلی برابر باشد{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ------------------------- submit Buttons ------------------------- */}

              <div className="form-group text-100" style={{}}>
                {natsioncodeValiation == false ||
                passwordValidation == false ||
                phonenumberValidation == false ||
                natsioncodeValiation == false ? (
                  <Button
                    className="button button align-items-center justify-content-center"
                    disabled
                  >
                    تایید
                  </Button>
                ) : (
                  <>
                    {waiting == false ? (
                      <button className="button button text-100  bg-blue-500 align-items-center justify-content-center">
                        تایید
                      </button>
                    ) : (
                      <Button className="button button   bg-blue-500 align-items-center justify-content-center">
                        <Spiner />
                      </Button>
                    )}
                  </>
                )}
                {/* -------------------------------------------------- */}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default UpdateForm;
