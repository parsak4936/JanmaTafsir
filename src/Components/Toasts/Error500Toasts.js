import "../../Styles/login.css";
import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Spiner from "../../Components/spiner/spiner";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Message } from "primereact/message";
import { Toast } from "primereact/toast";



const Error500Toasts =()=>{
    const toastBC = useRef(null);
    const Show500Errors = () => {
        toastBC.current.show({
          severity: "error",
          summary: " خطایی پیش آمده",
          detail: "لطفا دوباره امتحان کنید",
          life: 3000,
        });
      };
    return(<>
            <Toast ref={toastBC} position="bottom-center" />

    </>);
}
export default Error500Toasts;