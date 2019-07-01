import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dashboard from "../presentational";

export default class extends Component {
    static propTypes = {
        type: PropTypes.string,
    };

    render() {
        return (
            <Dashboard {...this.props}/>
        );
    }
}


