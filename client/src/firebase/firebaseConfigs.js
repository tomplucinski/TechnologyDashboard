import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFqndzV2GQS-MJck-DQLPVWKwkt42T-MQ",
    authDomain: "technologydashboard.firebaseapp.com",
    databaseURL: "https://technologydashboard.firebaseio.com",
    projectId: "technologydashboard",
    storageBucket: "technologydashboard.appspot.com",
    messagingSenderId: "495438971642",
    appId: "1:495438971642:web:49e90c0d088b6ac132ff43",
    measurementId: "G-SEV5YKY8RT"
};

firebase.initializeApp(firebaseConfig);
