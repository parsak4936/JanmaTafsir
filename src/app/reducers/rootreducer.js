import {combineReducers} from 'redux'
 import LoginReducers from './LoginReducers'
 import UserDataUpdateReducer from './UserDataUpdateReducer'
const rootReducer = combineReducers({
    LoginReducers,
    UserDataUpdateReducer,
})

export default rootReducer