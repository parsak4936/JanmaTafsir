const ModalToggle = (toggleB) => {
     
    return {
         type: "ModalToggle",
         payload: toggleB,
       
    }
}
const MapToggle = (toggleB) => {
     
    return {
         type: "MapToggle",
         payload: toggleB,
       
    }
}

 
// const logOut = () => {
//     return {
//         type: "LOG_OUT"
//     }
// }

export default {
    ModalToggle,
    MapToggle,
   
    // logOut
}