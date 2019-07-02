import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Invitation from "../presentations"
import {Route, Switch} from "react-router-dom";
import Add from "./Add";
export  default class extends Component {
    static propTypes = {
        type: PropTypes.string
    };
    render() {
        return (
                <Switch>
                    <Route excat path={"/invitations/new/:id"} component={Add}/>
                    <Route  path={"/invitations"} component={Invitation}/>
                </Switch>
        );
    }
}


