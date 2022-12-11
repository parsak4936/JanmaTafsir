import {combineReducers} from 'redux'
 import LoginReducers from './LoginReducers'
 import SignupReducer from './SignupReducer'
 import UserDataUpdateReducer from './UserDataUpdateReducer'
 import ToggleReducer from './ToggleReducer'
const rootReducer = combineReducers({
    LoginReducers,
   
    UserDataUpdateReducer,
    SignupReducer,
})

export default rootReducer