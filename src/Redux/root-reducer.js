import { combineReducers } from 'redux';
import AuthPopupReducer from './AuthPopup/AuthPopupReducer';
import UserReducer from './User/UserReducer';
const rootReducer = combineReducers({
    AuthPopup: AuthPopupReducer,
    User:UserReducer
})
export default rootReducer