import { combineReducers } from 'redux';
import auth from './auth';
import github from "./github";
import vote from './vote'

export default combineReducers({
    auth,
    github,
    vote
});