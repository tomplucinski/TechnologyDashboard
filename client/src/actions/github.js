import axios from 'axios';

export const getInitialFlightData = () => async dispatch => {

    try {
        const { data } = await axios.get('/api/auth');
    } catch (err) {
        console.log(err)
    }
}
