import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import GitHubStats from "./GitHubStats";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        console.log('mount')
    }

    render() {
        return (
            <div>
                <GitHubStats />
                <h4>Please vote for your favorite front end technology!</h4>
                <Button variant="primary">React</Button>{' '}
                <Button variant="success">Vue</Button>{' '}
                <Button variant="danger">Angular</Button>{' '}
                <Button variant="info">Ember</Button>{' '}
            </div>
        );
    }
};

export default Dashboard