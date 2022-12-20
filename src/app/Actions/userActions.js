const login = (userObj) => {
  return {
    type: "LOGIN",
    payload: userObj,
  };
};
const Register = (userObj) => {
  return {
    type: "Register",
    payload: userObj,
  };
};

const SelectState = (userObj) => {
  return {
    type: "SelectState",
    payload: userObj,
  };
};
const SelectReason = (userObj) => {
  return {
    type: "SelectReason",
    payload: userObj,
  };
};
const SelectSubstantialTopics = (userObj) => {
  return {
    type: "SelectSubstantialTopics",
    payload: userObj,
  };
};
const SelectCity = (userObj) => {
  return {
    type: "SelectCity",
    payload: userObj,
  };
};

const UserTypeChange = (userObj) => {
  //{name: 'کاربر حقیقی', code: '1'}

  return {
    type: "UserTypeChange",
    payload: userObj.code,
  };
};
const UpdateInfo = (userObj) => {
  //{name: 'کاربر حقیقی', code: '1'}

  return {
    type: "UpdateInfo",
    payload: userObj,
  };
};
const getInfo = (userObj) => {
  return {
    type: "getInfo",
    payload: userObj,
  };
};
const PhoneValidation = (userObj) => {
  return {
    type: "ValidationLogin",
    payload: userObj,
  };
};

const LogOut = () => {
  return {
    type: "LogOut",
  };
};
// const logOut = () => {
//     return {
//         type: "LOG_OUT"
//     }
// }

export default {
  getInfo,
  login,
  PhoneValidation,
  Register,
  UserTypeChange,
  SelectCity,
  SelectState,
  LogOut,
  SelectReason,
  SelectSubstantialTopics,
  UpdateInfo,
};
