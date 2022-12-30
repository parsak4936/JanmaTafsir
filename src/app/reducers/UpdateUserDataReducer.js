 
 
const InitialState = {
    
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationalCode: "",
    password: "",
    confirmPassword: "",
    shabaNumber: 0,
    address: "",
    cityId: 0,
    cityname:'',
    stateId: 0,
    statename:'',
    profilePhoto:'',
    userBirthday:'',

   
  };
 
// expertProfileInformationDto => ?

const UpdateUserDataReducer = (state = InitialState, action) => {
 
  switch (action.type) {
    case "UpdateInfo":
      return {
        ...state,
          firstName: action.payload.firstname,
         lastName: action.payload.lastname,
        phoneNumber: action.payload.phoneNumber,
        nationalCode: action.payload.nationalCode,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
       
        
        address: action.payload.address,
        cityId: action.payload.cityId,
        stateId: action.payload.stateId,
      };
      case "UpdateSelectState":
      return {
        ...state,

        statename: action.payload.name,
        stateId: action.payload.id,
      };
    case "UpdateSelectCity":
      return {
        ...state,

        cityname: action.payload.name,

        cityId: action.payload.id,
      };
    default:
      return state;
  }
};
export default UpdateUserDataReducer;
