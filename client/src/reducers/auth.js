import {
    LOGIN_SUCCESS, SIGNUP_SUCCESS
} from '../actions/types';

export default function(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: payload.email,
                token: payload.xa
            }
        default:
            return state
    }
}