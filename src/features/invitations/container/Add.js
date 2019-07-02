import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Add from "../presentations/Add";
import {createInvitation} from "../store/Actions";
import {connect} from "react-redux";

export default connect (null, {createInvitation})(class extends Component {
    static propTypes = {
        type: PropTypes.string
    };

    state={
        type: null,
        "url": "",
        "location": "",
        "headline": "",
        "description": ""
    };
    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    };
    createInvitationHandler = e =>{
        e.preventDefault();
        // console.log("send", this.state);
        // console.log(this.props);
        this.props.createInvitation(this.state, this.props.history)
    };
    
    componentDidMount() {
        this.setState({type: this.props.match.params.id})
    }
    
    render() {
        return (
               <Add {...this.state} handleChange={this.handleChange} createInvitation={this.createInvitationHandler}/>
        );
    }
});


