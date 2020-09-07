import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = () => {

    return (
       <div>
           <p>
               Please login or signup to vote for your favorite front end technology!
           </p>
           <Link to="/signup">
               Sign Up
           </Link>
           <Link to="/login">
               Login
           </Link>
       </div>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

export default Landing