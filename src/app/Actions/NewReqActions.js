const FirstForm = (userObj) => {
  console.log(userObj)
  return {
    type: "FirstFormSubmit",
    payload: userObj,
  };
};
const SecondFormSubmit = (userObj) => {
  return {
    type: "SecondFormSubmit",
    payload: userObj,
  };
};
const SecondFormBack = (userObj) => {
  return {
    type: "SecondFormBack",
    payload: userObj,
  };
};
const ThirdFormSubmit = (userObj) => {
  return {
    type: "ThirdFormSubmit",
    payload: userObj,
  };
};
const ThirdFormBack = (userObj) => {
  return {
    type: "ThirdFormBack",
    payload: userObj,
  };
};
const FourthFormSubmit = (userObj) => {
  return {
    type: "FourthFormSubmit",
    payload: userObj,
  };
};
const FourthFormBack = (userObj) => {
  return {
    type: "FourthFormBack",
    payload: userObj,
  };
};
export default {
  FirstForm,
  SecondFormBack,
  SecondFormSubmit,
  ThirdFormBack,
  ThirdFormSubmit,
  FourthFormBack,
  FourthFormSubmit,
};
