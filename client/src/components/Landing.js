import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import { logout } from '../actions/auth'
import Button from 'react-bootstrap/Button';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            token: ''
        }
    }

    componentDidMount = async () => {
        const user = await localStorage.getItem('user')
        const token = await localStorage.getItem('token')
        await this.setState({user, token})
    }

    handleClick = (e) => {
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        console.log('state', this.state)
        return (
            <div>
                <h1>Winning Technology Dashboard</h1>
                {this.state.user ? <div>
                    Welcome, {this.state.user}
                    <br/>
                    <Button onClick={this.handleClick}>Log out</Button>
                </div> : <div>
                    <p>
                        Please login or signup to vote for your favorite front end technology!
                    </p>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                    <br/>
                    <Link to="/login">
                        Login
                    </Link>
                </div> }
            </div>
        )
    }
}

export default withRouter(connect(null, {logout})(Landing))