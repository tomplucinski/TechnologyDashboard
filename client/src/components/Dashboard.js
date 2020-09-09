import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import GitHubStats from "./GitHubStats";
import { submitVote } from '../actions/vote'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canVote: true
        }
    }

    handleClick = (e) => {
        if (this.props.state.user && this.state.canVote) {
            e.preventDefault()
            this.props.submitVote(this.props.state.user, e.target.innerText)
            this.setState({canVote: false})

            // I would not put alert in production due to security reasons
            alert('Thank you for your vote!')
        } else {
            alert('You cannot vote more than once')
        }
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
}

const mapStateToProps = state => ({
    state: state.auth
});

export default withRouter(connect(mapStateToProps, { submitVote })(Dashboard))