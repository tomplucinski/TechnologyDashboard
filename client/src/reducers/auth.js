import {
    LOGIN_SUCCESS
} from '../actions/types';


const initialState = {
    token: null,
    isAuthenticated: null,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload.email,
                isAuthenticated: true,
                token: localStorage.getItem('token')
            }
        default:
            return state
    }
}