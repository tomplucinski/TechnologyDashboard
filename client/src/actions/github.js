import axios from 'axios'
import {
    REACT_SUCCESS,
    ANGULAR_SUCCESS,
    VUE_SUCCESS,
    EMBER_SUCCESS
} from './types';

export const getReactData = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/github/react')
        dispatch({
            type: REACT_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const getAngularData = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/github/angular')
        dispatch({
            type: ANGULAR_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const getVueData = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/github/vue')
        dispatch({
            type: VUE_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const getEmberData = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/github/ember')
        dispatch({
            type: EMBER_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}