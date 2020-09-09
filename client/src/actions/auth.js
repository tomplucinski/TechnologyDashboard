import firebase from "firebase"
import firebaseConfigs from "../firebase/firebaseConfigs"
import {
    LOGIN_SUCCESS
} from '../actions/types';

export const signup = (email, password) => async dispatch => {

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const token = await Object.entries(res.user)[5][1].b
        await localStorage.setItem('token', token)
    } catch (err) {
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

export const logout = () => async dispatch => {
    await firebase.auth().signOut()
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}