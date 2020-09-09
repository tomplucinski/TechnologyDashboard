import React from 'react';
import Login from "./Login";
import Signup from "./Signup";

const Landing = () => {
    return (
        <div>
            <h1>Winning Technology Dashboard</h1>
            <div>
                Please login or signup to vote for your favorite front end technology, make sure to provide a valid email with password of at least 6 letters.
            </div>
            <Login />
            <br/>
            <Signup />
        </div>
    )
}

export default Landing