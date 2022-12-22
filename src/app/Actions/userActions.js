const login = (userObj) => {
  console.log(userObj.token)
  return {
    type: "LOGIN",
    payload: userObj,
  };
};
const updateUserType = (userObj) => {
  
  return {
    type: "updateUserType",
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
const selectedExpertSub = (userObj) => {
  return {
    type: "selectedExpertSub",
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
 
  return {
    type: "UpdateInfo",
    payload: userObj,
  };
};

const UpdateSelectCity = (userObj) => {
  //{name: 'کاربر حقیقی', code: '1'}

  return {
    type: "UpdateSelectCity",
    payload: userObj,
  };
};
const UpdateSelectState = (userObj) => {
  //{name: 'کاربر حقیقی', code: '1'}

  return {
    type: "UpdateSelectState",
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
  selectedExpertSub,
  UserTypeChange,
  SelectCity,
  UpdateSelectState,
  UpdateSelectCity,
  SelectState,
  LogOut,
  SelectReason,
  SelectSubstantialTopics,
  UpdateInfo,
  updateUserType,
};
