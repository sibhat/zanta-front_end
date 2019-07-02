import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Portfolio from "../presentation"
export default class extends Component {
    static propTypes = {
        type: PropTypes.string
    };
    render() {
        return (
            <Portfolio />
        );
    }
}



