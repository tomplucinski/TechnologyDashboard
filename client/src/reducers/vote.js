import {
    VOTE_SUCCESS
} from '../actions/types';

export default function(state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case VOTE_SUCCESS:
            return {
                ...state
            }
        default:
            return state
    }
}