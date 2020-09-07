import React from 'react';
import { connect } from 'react-redux'
import { getInitialFlightData } from "../actions/github";
import {withRouter} from "react-router-dom";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        console.log('mount')
        this.props.getInitialFlightData()
    }

    render() {
        return (
            <div className="App">
                hey
            </div>
        );
    }
};

export default withRouter(connect(null,{ getInitialFlightData })(Dashboard))