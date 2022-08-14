import { combineReducers } from "redux";
import contactReucer from './contactReducer';

export default combineReducers({
    myContact: contactReucer
})
