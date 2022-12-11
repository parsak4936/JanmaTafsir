const login = (userObj) => {
     
    return {
         type: "LOGIN",
         payload: userObj,
       
    }
}
const Register = (userObj) => {
     
    return {
         type: "Register",
         payload: userObj,
       
    }
}

const SelectState = (userObj) => {
     console.log(userObj)
    return {
         type: "SelectState",
         payload: userObj,
       
    }
}
const SelectCity = (userObj) => {
     
    return {
         type: "SelectCity",
         payload: userObj,
       
    }
}

const UserTypeChange = (userObj) => {
     //{name: 'کاربر حقیقی', code: '1'}
     
    return {
         type: "UserTypeChange",
         payload: userObj.code,
       
    }
}
const LogOut = () => {
     
    return {
         type: "LogOut",
         
       
    }
}
// const logOut = () => {
//     return {
//         type: "LOG_OUT"
//     }
// }

export default {
    login,
    Register,
    UserTypeChange,
    SelectCity,
    SelectState,
    LogOut,
    // logOut
}