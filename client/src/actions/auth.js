import firebase from "firebase"
import firebaseConfigs from "../firebase/firebaseConfigs"

export const signup = (email, password) => async dispatch => {

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log("RESPONSE", res)
        const token = await Object.entries(res.user)[5][1].b
        await localStorage.setItem('token', token)
    } catch (err) {
        console.log(err)
    }
}

export const login = (email, password) => async dispatch => {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)
        const token = await Object.entries(res.user)[5][1].b
        await localStorage.setItem('token', token)
    } catch(err) {
        console.log(err)
    }
}

export const signout = () => async dispatch => {
    await firebase.auth().signOut()
    localStorage.removeItem('token')
}