import React from 'react';
// import { connect } from 'react-redux'
// import {withRouter} from "react-router-dom";
import axios from 'axios'

class GitHubStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/api/github/')
            console.log(data)
        })()
        // const source = new EventSource('http://localhost:5000/api/github/')
        // source.addEventListener('message', event => {
        //     console.log('Got', event.data);
        // });
    }

    render() {
        return (
            <div>
                <h4>Live stats from GitHub</h4>
            </div>
        );
    }
};

export default GitHubStats