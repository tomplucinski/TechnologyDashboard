import axios from 'axios'
import {
    VOTE_SUCCESS
} from '../actions/types';

export const submitVote = (user, vote) => async dispatch => {
    const payload = {
        user,
        vote
    }
    try {
        await axios.post('http://localhost:5000/api/vote/', payload)
    } catch(err) {
        console.log(err)
    }
}