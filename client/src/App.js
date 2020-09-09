import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default App