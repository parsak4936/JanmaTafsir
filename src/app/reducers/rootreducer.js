import {combineReducers} from 'redux'
 import LoginReducers from './LoginReducers'
 import SignupReducer from './SignupReducer'
  import getInfoReducer from './getInfoReducer'
const rootReducer = combineReducers({
    LoginReducers,
    SignupReducer,
    getInfoReducer,

   
})

export default rootReducer