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

const UserTypeChange = (userObj) => {
     //{name: 'کاربر حقیقی', code: '1'}
     
    return {
         type: "UserTypeChange",
         payload: userObj.code,
       
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
    UserTypeChange
    // logOut
}