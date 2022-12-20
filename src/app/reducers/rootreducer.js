import {combineReducers} from 'redux'
 import LoginReducers from './LoginReducers'
 import SignupReducer from './SignupReducer'
  import ToggleReducer from './ToggleReducer'
  import getInfoReducer from './getInfoReducer'
const rootReducer = combineReducers({
    LoginReducers,
   
    getInfoReducer,

   
})

export default rootReducer