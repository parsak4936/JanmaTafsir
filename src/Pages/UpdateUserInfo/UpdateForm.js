import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Toast } from "primereact/toast";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import "./updateForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import allActions from "../../app/Actions/AllActions";

const UpdateForm = () => {
  const selectedStateID = useSelector((state) => state);
  console.log(selectedStateID);

  const toastBC = useRef(null);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
  });
  const handlechange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    dispatch(allActions.userActions.UpdateInfo(userData));
  };

  return (
    <div className="form-demo">
      <div className=" grid col-6 right-login">
        <div className="card-login grid col-12">
          <Formik initialValues="" onSubmit={onSubmit}>
            {({ errors, touched }) => (
              <Form className="login-form">
                {/* -------------------------  firstname - lastname------------------------- */}
                <div className="grid col-12">
                  <div className="col-6">
                    <div className="form-group">
                      <Field
                        name="firstname"
                        id="firstname"
                        type="text"
                        style={{ color: "black" }}
                        onChange={handlechange}
                        // value={formik.values.NationCode}
                        className="form-field"
                        value=""
                        placeholder="first name"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <Field
                        name="lastname"
                        id="lastname"
                        type="text"
                        style={{ color: "black" }}
                        onChange={handlechange}
                        // value={formik.values.NationCode}
                        className="form-field"
                        value=""
                        placeholder="//lastname "
                      />
                    </div>
                  </div>
                </div>

                {/* -------------------------  Password ------------------------- */}
                <div className="grid col-12" style={{color:'white'}}>
                  <div className="col-6">
                    <div className="form-group">
                      استان
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      شهر 
                    </div>
                  </div>
                </div>


                <div className="grid col-12"  style={{color:'white'}}>
                  <div className="col-6">
                    <div className="form-group">
                      نوع کاربری
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      تاریخ تولد 
                    </div>
                  </div>
                </div>

                <div className="grid col-12"  style={{color:'white'}}>
                  <div className="col-12">
                    <div className="form-group">
                     رمز ورود
                    </div>
                  </div>
                </div>

                <div className="grid col-12"  style={{color:'white'}}>
                  <div className="col-12">
                    <div className="form-group">
                    بیوگرافی
                    </div>
                  </div>
                </div>

                <div className="grid col-12"  style={{color:'white'}}>
                  <div className="col-12">
                    <div className="form-group">
                   کد ملی
                    </div>
                  </div>
                </div>
               
                <button className="button align-items-center justify-content-center">
                  تایید
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default UpdateForm;
