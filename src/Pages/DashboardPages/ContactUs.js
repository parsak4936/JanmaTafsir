import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";

const ContactUs = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });
  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div
      className=" grid col-12   align-items-center justify-content-center "
      style={{ direction: "rtl" }}
    >
      <div className="grid col-12   align-items-center justify-content-center  md:col-6 lg:col-6 ">
        <p className="grid col-12 text-center align-items-center justify-content-center ">
          {" "}
          ارتباط با تیم جانما تفسیر
        </p>
        <p className="grid col-12 text-right p-4">
          {" "}
          جانما تفسیر سامانه ایی کاربر محور میباشد و همیشه آماده شنیدن پیشنهادات
          و نظرات شما عزیزان خواهد بود. همچنین ، کارشناسان و اعضای تیم جانما
          تفسیر ، همواره به دنبال افراد مجرب و قابل اطمینان است. شما میتوانید با
          پر کردن فرم مقابل ، نظرات ، پیشنهادات،انتقادات و رزومه ی خود را به
          برای ما بفرستید. متخصصان ما به صورت شبانه روزی ، پاسخ گوی شما خواهند
          بود.
        </p>
      </div>
      <div className=" grid col-12  md:col-6 lg:col-6   ">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "30vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Registration Successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Your account is registered under name <b>{formData.name}</b> ;
              it'll be valid next 30 days without activation. Please check{" "}
              <b>{formData.email}</b> for activation instructions.
            </p>
          </div>
        </Dialog>

        <div className="flex justify-content-center w-8 h-full  ">
          <div className="card w-full h-auto p-4 ">
            {/* <Image
                width='100%'
               
                src={userImage}
                fluid
                style={{ padding:'20px',  }}
                roundedCircle
              /> */}
            <h5 className="text-center">Register</h5>
            <form onSubmit={formik.handleSubmit} className="p-fluid ">
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    // className={classNames({
                    //   "p-invalid": isFormFieldValid("name"),
                    // })}
                  />
                  <label
                    htmlFor="name"
                    // className={classNames({
                    //   "p-error": isFormFieldValid("name"),
                    // })}
                  >
                    Name*
                  </label>
                </span>
                {getFormErrorMessage("name")}
              </div>
              <div className="field w-full h-auto">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    // className={classNames({
                    //   "p-invalid": isFormFieldValid("email"),
                    // })}
                  />
                  <label
                    htmlFor="email"
                    // className={classNames({
                    //   "p-error": isFormFieldValid("email"),
                    // })}
                  >
                    Email*
                  </label>
                </span>
                {getFormErrorMessage("email")}
              </div>
              <InputTextarea rows={5} cols={30} />
              <Button type="submit" label="Submit" className="mt-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
