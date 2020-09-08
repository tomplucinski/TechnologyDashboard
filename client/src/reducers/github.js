import {
    REACT_SUCCESS,
    ANGULAR_SUCCESS,
    VUE_SUCCESS,
    EMBER_SUCCESS
} from '../actions/types';

export default function(state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case REACT_SUCCESS:
            return {
                ...state, react: payload
            }
        case ANGULAR_SUCCESS:
            return {
                ...state, angular: payload
            }
        case VUE_SUCCESS:
            return {
                ...state, vue: payload
            }
        case EMBER_SUCCESS:
            return {
                ...state, ember: payload
            }
        default:
            return state
    }
}