import firebase from "firebase"
import firebaseConfigs from "../firebase/firebaseConfigs"
import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS
} from '../actions/types';

export const signup = (email, password) => async dispatch => {
    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const token = user.xa
        await localStorage.setItem('token', token)
        await localStorage.setItem('user', user.email)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: user
        })
    } catch(err) {
        console.log(err)
    }
}

export const login = (email, password) => async dispatch => {
    try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
        const token = user.xa
        await localStorage.setItem('token', token)
        await localStorage.setItem('user', user.email)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user
        })
    } catch(err) {
        console.log(err)
    }
}