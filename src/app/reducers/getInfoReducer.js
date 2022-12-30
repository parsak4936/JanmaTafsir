 

const InitialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  nationalCode: "",
  password: "",
  confirmPassword: "",
  userType: null,
  address: "",
  cityId: 0,
  cityName: "",
  stateId: 0,
  stateName: "",
  profilePhoto: "",
  userBirthday: "",
};

// expertProfileInformationDto => ?

const getInfoReducer = (state = InitialState, action) => {
   switch (action.type) {
    case "getInfo":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        nationalCode: action.payload.nationalCode,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,

        userType: action.payload.userType,
        address: action.payload.address,
        stateId: action.payload.stateId,
        stateName: action.payload.stateName,

        cityId: action.payload.cityId,
        cityName: action.payload.cityName,

        profilePhoto: action.payload.profilePhoto,
        userBirthday: action.payload.userBirthday,
      };
    default:
      return state;
  }
};
export default getInfoReducer;
