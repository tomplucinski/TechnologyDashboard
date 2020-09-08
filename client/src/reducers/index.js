import { combineReducers } from 'redux';
import auth from './auth';
import github from "./github";

export default combineReducers({
    auth,
    github
});