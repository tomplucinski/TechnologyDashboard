import React from 'react';
import { connect } from 'react-redux'
import { getReactData, getAngularData, getVueData, getEmberData } from "../actions/github";
import Table from "react-bootstrap/Table";

class GitHubStats extends React.Component {

    componentDidMount() {
        this.props.getReactData()
        this.props.getAngularData()
        this.props.getVueData()
        this.props.getEmberData()
    }

    render() {

        return (
            <div>
                <h4>Live stats from GitHub</h4>

                {this.props.data.react && this.props.data.angular && this.props.data.vue && this.props.data.ember ?
                    <Table>
                        <thead>
                        <tr>
                            <th>React</th>
                            <th>Angular</th>
                            <th>Vue</th>
                            <th>Ember</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Stargazers: {this.props.data.react.items[0].stargazers_count}</td>
                            <td>Stargazers: {this.props.data.angular.items[0].stargazers_count}</td>
                            <td>Stargazers: {this.props.data.vue.items[0].stargazers_count}</td>
                            <td>Stargazers: {this.props.data.ember.items[0].stargazers_count}</td>
                        </tr>
                        <tr>
                            <td>Forks: {this.props.data.react.items[0].forks_count}</td>
                            <td>Forks: {this.props.data.angular.items[0].forks_count}</td>
                            <td>Forks: {this.props.data.vue.items[0].forks_count}</td>
                            <td>Forks: {this.props.data.ember.items[0].forks_count}</td>
                        </tr>
                        <tr>
                            <td>Issues: {this.props.data.react.items[0].open_issues_count}</td>
                            <td>Issues: {this.props.data.angular.items[0].open_issues_count}</td>
                            <td>Issues: {this.props.data.vue.items[0].open_issues_count}</td>
                            <td>Issues: {this.props.data.ember.items[0].open_issues_count}</td>
                        </tr>
                        </tbody>
                    </Table>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.github
});

export default connect(mapStateToProps, { getReactData, getAngularData, getVueData, getEmberData })(GitHubStats)