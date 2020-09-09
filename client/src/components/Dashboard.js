import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import GitHubStats from "./GitHubStats";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            canVote: true
        }
    }

    componentDidMount() {
        // console.log(this.state)
    }

    handleClick() {
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <GitHubStats />
                <h4>Please vote for your favorite front end technology!</h4>
                <Button onClick={this.handleClick} variant="primary">React</Button>{' '}
                <Button onClick={this.handleClick} variant="success">Vue</Button>{' '}
                <Button onClick={this.handleClick} variant="danger">Angular</Button>{' '}
                <Button onClick={this.handleClick} variant="info">Ember</Button>{' '}
            </div>
        );
    }
};

export default Dashboard