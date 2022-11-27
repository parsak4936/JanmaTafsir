import "../Styles/signup.css"
import Img from "../Assets/result.svg"
 import Dropdown from '../Components/dropdown/dropdownComponent'
import React, { useState, useEffect, useRef } from "react";

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from 'react-router-dom';
import Header from "../Components/header/header";


 function Signup  ({ login = false })  {
     const [showPassword, setshowPassword] = useState(true);

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

    const validationsRegister = yup.object().shape({
        email: yup
            .string()
            .email("E-mail inválido")
            .required("ایمیل خود را وارد کنید"),
        password: yup
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .required("رمز عبور نباید خالی باشد"),
        confirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas são diferentes")
            .required("A confirmação da senha é obrigatória"),
    });


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
                            {!login && <Link to="/signup">ثبت نام</Link>}
                        </div>
                        
                    </div>
                    <h1>ثبت نام</h1>
                    <Formik
                        initialValues={{}}
                        onSubmit={handleRegister}
                        validationSchema={validationsRegister}
                    >

                        <Form className="login-form">
                            <div className="form-group">
                               

                            < Dropdown/>

                               
                            </div>

                            {/*Outro campo*/}

                            <div className="form-group">
                                {/* <label form="email">رمز</label> */}
                                <Field name="password"   className="form-field" placeholder="کدملی/کدشناسایی/کد اقتصاد" />

                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </div>

                           

                            <div className="form-group">
                                {/* <label form="email">Confirme sua senha</label> */}
                                <Field name="confirmation" type={showPassword ? 'text' : 'password'} className="form-field   " placeholder="رمز ورود" />
 
                                <ErrorMessage
                                    component="span"
                                    name="confirmation"
                                    className="form-error"
                                />
                            </div>
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