import { Field, Formik, useFormik, Form } from "formik";
import React, { useState } from "react";
import axios from "axios";
import LoadingAnimation from "../../Components/loadingAnimation";
import { useLocation,useNavigate } from "react-router-dom";
 
function SmsValidation({ logado = false }) {
  const location = useLocation();
  const [randCode, setrandCode] = useState({ value: "", error: "" });
  const [waiting, setWaiting] = useState(false);
  const [token, setUserToken] = useState("");
  const navigate = useNavigate();
  //TODO : how to send
  const [phoneNumber, setphoneNumber] = useState(location.state.phoneNumber);
  //TODO : if you wanted to add some Token to the BackEnd!
  //   const storeData = async (Token,SystemID) => {
  //     try {
  //       await AsyncStorage.setItem('@Token', Token)
  //       await AsyncStorage.setItem('@SystemID', SystemID)

  //     } catch (e) {
  //        console.log(e.message);
  //     }
  //   }
  const ValidationURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Authentication/UserValidationNumber";
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      randCode: "",
    },

    onSubmit: (values) => {
      setrandCode({ value: values.randCode, error: "" });
      console.log("this is value " + values.randCode);
      
      navigate('/userDashboard');

      setWaiting(true);
      const user = {
        randCode: values.randCode,
        phoneNumber: phoneNumber,
      };
      axios
        .post(ValidationURL, {
          randCode: user["randCode"],
          phoneNumber: user["phoneNumber"],
        })
        .then((response) => {
          console(response.StatusCode);
          //   const page = response;
          if (response.StatusCode == 200) {
            setWaiting(false);
          } else {
            setWaiting(false);
          }
          // if (page === true) {
          //   localStorage.setItem('@user', JSON.stringify(response.config.data));
          //   window.location.reload();
          // } else {
          //   alert(response.data.msg);
          //   setWaiting(false)
          // }
        })
        .catch((exception) => {
          setWaiting(false);
          if (exception.response.status == 400) {
            console.log("400");
          } else {
            console.log(exception.response.status);
          }
        });
      //   alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="body">
      <div className="left-login">
        {/* adding a table for informations here */}
      </div>

      <div className="right-login">
        <div className="card-login">
          <h1>ورود </h1>
          <Formik
            initialValues={{ randCode: "", phoneNumber: "" }}
            onSubmit={formik.handleSubmit}
          >
            <Form className="login-form" onSubmit={formik.handleSubmit}>
              {/* -------------------------  code ------------------------- */}
              <div className="form-group">
                {/* <label form="email">Confirme sua senha</label> */}
                <Field
                  name="randCode"
                  id="randCode"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.randCode}
                  className="form-field"
                  placeholder="تایید"
                />
              </div>

              <div className="form-group" style={{}}>
                {waiting == false ? (
                  <button className="button" type="submit">
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

export default SmsValidation;
