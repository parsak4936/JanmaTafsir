const login = (userObj) => {
   return {
    type: "LOGIN",
    payload: userObj,
  };
};

//======================================
const updateUserType = (userObj) => {
  
  return {
    type: "updateUserType",
    payload: userObj,
  };
};
//==============Register Actions========================
const Register = (userObj) => {
  return {
    type: "Register",
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
const SelectState = (userObj) => {
  return {
    type: "SelectState",
    payload: userObj,
  };
};
const SelectCity = (userObj) => {
  return {
    type: "SelectCity",
    payload: userObj,
  };
};
const SelectGraduatedState = (userObj) => {
  return {
    type: "SelectGraduatedState",
    payload: userObj,
  };
};
const SelectGraduatedCity = (userObj) => {
  return {
    type: "SelectGraduatedCity",
    payload: userObj,
  };
};
const SelectActivityRange = (userObj) => {
  return {
    type: "SelectActivityRange",
    payload: userObj,
  };
};
//==============New Req Actions========================
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
const SelectExpertNewRq = (userObj) => {
  return {
    type: "SelectExpertNewRq",
    payload: userObj,
  };
};


//==============Update Actions===================
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
//================Get Info==============
const getInfo = (userObj) => {
  return {
    type: "getInfo",
    payload: userObj,
  };
};
//======================================
const PhoneValidation = (userObj) => {
  return {
    type: "ValidationLogin",
    payload: userObj,
  };
};
//================================
const LogOut = () => {
  return {
    type: "LogOut",
  };
};
 
export default {
  getInfo,
  login,
  SelectExpertNewRq,
  SelectActivityRange,
  SelectGraduatedCity,
  PhoneValidation,
  Register,
  selectedExpertSub,
  UserTypeChange,
  SelectCity,
  UpdateSelectState,
  UpdateSelectCity,
  SelectState,
  SelectGraduatedState,
  LogOut,
  SelectReason,
  SelectSubstantialTopics,
  UpdateInfo,
  updateUserType,
};
