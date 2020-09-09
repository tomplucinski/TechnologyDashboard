import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from "./components/Landing"
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from "./components/Dashboard"

const App = () => {
    return (
            <Router>
                <Landing />
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </Router>
    )
}

export default App