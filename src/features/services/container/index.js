import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Services from "../presentational";
import {connect} from "react-redux";
import {getAllServices} from "../store/action";

const MapStateToProps = state =>({
    services: state.services.services
});


export default connect(MapStateToProps, {getAllServices})(class extends Component {
    static propTypes = {
        type: PropTypes.string
    };
    componentDidMount() {
        this.props.getAllServices();
    }
    clickHandler = id =>{
        // console.log(id)
       this.props.history.push(`/invitations/new/${id}`)
        
    };

    render() {
        let {services} = this.props;
        return (
            <Services services={services} clickHandler={this.clickHandler}/>
        );
    }
});

