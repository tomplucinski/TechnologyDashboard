import {
    AUTH_SUCCESS
} from '../actions/types';

export default function(state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                payload
            }
        default:
            return state
    }
}