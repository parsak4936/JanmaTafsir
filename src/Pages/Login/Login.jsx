import "../Styles/login.css"
import React,{useState} from "react";
import Dropdown from '../../Components/dropdown/dropdownComponent'
import * as yup from "yup";
import {validations} from '../../validations.jsx'
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from "axios";
import Img from "../Assets/backgroundimage.jpg"
import {useNavigate,Link} from "react-router-dom"
import Header from '../../Components/header/header'
import LoadingAnimation from '../../Components/loadingAnimation'
import { useSelector, useDispatch } from 'react-redux';

import { BiBorderRadius } from "react-icons/bi";
// value={firstname}
// onChange={e => setfirstName(e.target.value)}


// const handleSubmit = (evt) => {
//   evt.preventDefault();
//   const re = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>() [\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} ])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (firstname === "" || lastname === "" || email === "" || text === ""){
//       $('#error').css('display', 'block');
//       $("#error").html('لطفا تمام فیلد ستاره دار را تکمیل فرمایید');
//   }else if(!email.match(re)){
//       $('#error').css('display', 'block');
//       $("#error").html('لطفا ایمیل را صحیح وارد بفرمایید');
//   }else {
//       $.ajax({
//           url: 'https://kojaii.herokuapp.com/api/supports',
//           type: 'POST',
//           dataType: 'json',
//           data: {
//               first_name: firstname,
//               last_name: lastname,
//               email: email,
//               text: text,
//               type: parseInt(value)
//           },
//           async: false,
//           complete: function (r) {
//               if (r.status === 200) {

//                   $('#error').css('color', 'green');
//                   $("#error").html('پیام شما با موفقیت ثبت شد با تشکر از شما');
//               } else {
//                   alert(JSON.parse(r.responseText)['message']);
//               }
//           }
//       });
//   }


// }


















function Login({logado=false}) {
  const login = useSelector(selectCount);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] =useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
  const navigate = useNavigate();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const [waiting,setWaiting]=useState(false)
  const [invalidUser,setinvalidUser] = useState('')
  // const onLoginPressed = async (e) => {
  //   e.preventDefault();
  //     setWaiting(true)
  //     const user = {
  //       "mobile": mobile.value,
  //       "password": password.value
  //     }
  //       axios.post('http://smartvideodoorphoneproject.herokuapp.com/accounts/login-step1/', {
  //       mobile: user["mobile"],
  //       password: user["password"]
  //     } )
     
  //       .then(function (response,r) {

  //           if(response.status === 200){   
  //                       console.log("login was successful")
          
  //              const UserValidtoken = response.data.token;
  //              navigation.push('VariftScreen',{Token :UserValidtoken});
           
             
  //           } else{
  //             setinvalidUser(response)
  //             console.log("this is invalid user content"+invalidUser)
  //             console.log( typeof(invalidUser) )


  //           }
  //       })
  //       .catch(error=>{
  //   setWaiting(false)
        
  //       } 
  //   );
  //     return
   
  // }

  const handleLogin = (values) => {
 
    setWaiting(true)
    console.log(waiting)
    console.log("first of handle login")
    // axios.post("http://localhost:3001/login", {
    //   email: values.email,
    //   password: values.password,
    // }).then((response) => {

    //   const page = response.data;

    //   if (page === true) {
    //     localStorage.setItem('@user', JSON.stringify(response.config.data));
    //     window.location.reload();
    //   } else {
    //     alert(response.data.msg);
    //     setWaiting(false)
    //   }

    // });
  };

  // const handleRegister = (values) => {
  //   Axios.post("http://localhost:3001/register", {
  //     email: values.email,
  //     password: values.password,
  //   }).then((response) => {
  //     alert(response.data.msg);
  //     console.log(response);
  //   });
  // };

  const validationsLogin = yup.object().shape({
    email: yup
      .string("ادرس ایمیل نباید تنها عدد باشد")
      .email("ایمیل درست نمیباشد")
      .required("ایمیل مورد نیاز است"),
    phone: yup
      .number("تلفن همراه نباید حروف داشته باشد")
      
      .typeError("فرمت شماره همراه اشتباه است")
      
      .positive("شماره همراه نمیتواند منفی داشته باشد")
      
      .integer("شماره همراه صحیح نمیباشد")
     
      .min(12,"شماره باید دوازده رقم باشد")
       
      .required('شماره همراه مورد نیاز است')
      ,
    password: yup
      .string()
      .min(8, "اندازه رمز عبور حداقل باید 8 کاراکتر باشد")
      .required("رمز عبور نباید خالی باشد"),
  });

  // const validationsRegister = yup.object().shape({
  //   email: yup
  //     .string()
  //     .email("email inválido")
  //     .required("O email é obrigatório"),
  //   password: yup
  //     .string()
  //     .min(8, "A senha deve ter pelo menos 8 caracteres")
  //     .required("A senha é obrigatória"),
  //   confirmation: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "As senhas são diferentes")
  //     .required("A confirmação da senha é obrigatória"),
  // });

  return (
    <div  style={{
      backgroundImage: 'url('+Img+')',
      backgroundSize: "cover",
      height: "100vh",
    }}
     className="body">
     
      <div className="left-login">
        {/* adding a table for onformations here */}
      

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
          <h1>ورود   </h1>
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="login-form">
              <div className="form-group">
            {/*عنوان*/}
             
              <div className="form-group">
                 
                 <Dropdown/>
              
              </div>

                 {/*ایمیل یا کد ملی  */}
  <div className="form-group">

  <Field name="email"   className="form-field" placeholder="کدملی/کدشناسایی/کد اقتصاد" />

      <ErrorMessage
        component="span"
        name="email"
        className="form-error"
      />
  </div>

 
              </div>
              {/*اتلفن همراه */}

              <div className="form-group">
              <Field name="phone"   className="form-field" placeholder="شماره همراه"/>
              <ErrorMessage
                component="span"
                name="phone"
                className="form-error"
              />
              </div>
              
              {/*رمز عبور*/}

              <div className="form-group">
                 <Field name="password" type='password' className="form-field" placeholder="رمز عبور" />

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <div className="form-group" style={{}}>
              { waiting ==false ? <button className="button" onClick={handleLogin} type="submit">
                تایید
              </button>:
               <div>  <LoadingAnimation style={{ }}/>   </div>
             

}
              </div>

      


             
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;