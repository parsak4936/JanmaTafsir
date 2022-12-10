import React from "react";
import initialState from "./Initialstate";

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Register":
      return {
        ...state,
        normalusers: {
          ...state.normalusers,
          nationalCode: action.payload.nationCode,
          password: action.payload.password,
          userType: action.payload.userType,
          confirmPassword: action.payload.confirmPassword,
          phoneNumber: action.payload.phoneNumber,
        },
      };

    case "UserTypeChange":
      return {
        ...state,
        normalusers: {
          ...state.normalusers,
          userType: action.payload,
        },
      };

    default:
      return state;
  }
};
export default SignupReducer;
