import React from "react";
const InitialState = {
  firstname: "",
  lastname: "",
  phoneNumber: "",
  nationalCode: "",
  password: "",
  confirmPassword: "",
  shabaNumber: 0,
  userType: "",
  address: "",
  statename: "",
  stateID: 0,
  cityname: "",
  Token: "",
  SubscribedUser: false,
};
const SignupReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "Register":
      return {
        ...state,
        nationalCode: action.payload.nationCode,
        password: action.payload.password,
        userType: action.payload.userType,
        confirmPassword: action.payload.confirmPassword,
        phoneNumber: action.payload.phoneNumber,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    case "SelectState":
      return {
        ...state,

        statename: action.payload.statename,
        stateID: action.payload.stateID,
      };
    case "SelectCity":
      return {
        ...state,

        cityname: action.payload.cityname,

        cityID: action.payload.cityID,
      };
    case "UserTypeChange":
      return {
        ...state,

        ...state,
        userType: action.payload,
      };

    default:
      return state;
  }
};
export default SignupReducer;
