const login = (userObj) => {
     
    return {
         type: "LOGIN",
         payload: userObj,
       
    }
}
 const seeData =(userObj)=>{
    return {
        type: "GetUserData",
        payload: userObj,
      
   }
 }
// const logOut = () => {
//     return {
//         type: "LOG_OUT"
//     }
// }

export default {
    login,
    seeData
    // logOut
}