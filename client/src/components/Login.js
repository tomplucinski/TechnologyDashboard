import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../actions/auth'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        this.props.login(this.state.email, this.state.password)
        this.props.history.push('/dashboard')
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState(prev => ({...prev, [name]: value}))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="email" placeholder='email' value={this.state.email} />
                <input onChange={this.handleChange} name="password" placeholder='password' value={this.state.password} />
                <button>Log In</button>
            </form>
        )
    }
}

export default withRouter(connect(null,{ login })(Login))