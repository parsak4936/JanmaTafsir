import React, { useState, useEffect, useRef, useCallback } from "react";
import * as yup from "yup";
const phoneRegExp = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/
const nationCodeRegExp = /^[0-9]{10}$/

const ValidationsRegister = yup.object().shape({
  PhoneNumber: yup.string().matches(phoneRegExp, 'شماره تلفن درست نمیباشد')
  .min(11, "شماره تلفن باید یازده رقم باشد")
  .required("شماره همراه خود را وارد کنید")
   ,
   NationCode: yup.string().matches(nationCodeRegExp, ' کدملی درست نمی باشد ')
 
    .required("کد ملی خود را وارد کنید"),
  Password: yup
    .string()
    .min(8, "رمز عبور باید حداقل هشت کاراکتر داشته باشد")
    .required("رمز عبور نباید خالی باشد"),
    Password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور برابر با قبلی نیست")
    .required("تکرار رمز عبور اجباری است"),
});

export default ValidationsRegister; 