// const ValidationURL =
//   "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserValidationNumber";

//     axios
//       .post(ValidationURL, {
//         randCode: user["randCode"],
//         phoneNumber: user["phoneNumber"],
//       })
//       .then((response) => {

//       })
//       .catch((exception) => {
//         setWaiting(false);
//         if (exception.response.status == 400) {
//           console.log("400");
//         } else {
//           console.log(exception.response.status);
//         }
//       });

import React, { useRef, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import SmsValidationBG from '../../Assets/NewReqImage.jpg'
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Divider } from "primereact/divider";
import Spiner from "../../Components/spiner/spiner";
import { Toast } from "primereact/toast";
import Show400Errors, { Show500Errors, ShowNetorkErrors } from "../../Components/ShowErrors/ShowErrors";

function SmsValidation() {
  const signupToken = useSelector((state) => state.SignupReducer.Token);
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${signupToken}`,
  //   },
  // };
  const toastBC = useRef(null);
  const [waiting, setWaiting] = useState(false);
  const [randCode, setrandCode] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userType = useSelector((state) => state.SignupReducer.userType);


  //  URL inputs :{
  //   "phoneNumber": "string",
  //   "randCode": "string"
  // }    const ValidationURL =

  //===================================
  //URL Response :{
  //   "isSuccess": true,
  //   "statusCode": 200,
  //   "message": "string",
  //   "data": {
  //     "token": "string",
  //     "userType": 1
  //   }
  // }
  const ValidationURL=
  "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserValidationNumber";

  const phoneNumber = useSelector(
    (state) => state.persistedReducer.SignupReducer.phoneNumber
  );
  console.log(phoneNumber)
  const handleValidation = () => {
    setWaiting(true);
    const user = {
      randCode: randCode,
      phoneNumber:phoneNumber
    };
    setTimeout(
      () => {
        axios
          .post(ValidationURL, {
            randCode:user["randCode"],
            phoneNumber:user["phoneNumber"],
          })
          .then((response) => {
            
            if (response.data.statusCode == 200) {
              setWaiting(false);
              console.log("عسثق،غحث هس :")

              console.log(response.data.data.userType)
              dispatch(
                allActions.userActions.PhoneValidation(response.data.data.token)
              );
              dispatch(
                allActions.userActions.updateUserType(response.data.data.userType)
              );
              
              navigate("/MapView");
            }
          })
          .catch((exception) => {
            setWaiting(false);
            if (exception.response.status === 400) {
              Show400Errors(toastBC);
            } else if (exception.response.status === 500) {
              Show500Errors(toastBC);
            } else if (exception.code === "ERR_NETWORK") {
              ShowNetorkErrors(toastBC);
            }
            // if (exception.response.status == 400) {
            //   Show400Errors();
            // } else if (exception.response.status == 401) {
            //   ShowTokenErrors(toastBC);
            // }
            //  else if (exception.response.status == 500) {
            //   Show500Errors();
            // }
          });
      },

      2000
    );
  };
   

  return ( 
    <div className="grid c-12 "  style={{
      backgroundImage: `url(${SmsValidationBG})`,
      width:"100%",
      alignItems:'center',
      textAlign:'center',
      justifyContent:'center',
      height:'100vh',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <Toast ref={toastBC} position="bottom-center" />

      <div className="right-signup grid c-12">
        <div className="card-signup">

          <Formik
            initialValues={{}}
            onSubmit={handleValidation}
            // validationSchema={ValidationsRegister}
          >
            <Form className="login-form">
              {/* -------------------------  Phone number------------------------- */}
              <div className="form-group">
                <h5 style={{ color: "white" }}>    کد ارسال شده </h5>

                <Field
                  name="randCode"
                  style={{ color: "black" }}
                  className="form-field"
                  onChange={(e)=>{setrandCode(e.target.value)}}
                  placeholder="کد ارسال شده  "
                />
              </div>
{waiting==false ?  <button className="button button align-items-center justify-content-center">
                تایید
              </button>
:
<button className="button button align-items-center justify-content-center">
                <Spiner />
              </button>
}
              
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SmsValidation;
