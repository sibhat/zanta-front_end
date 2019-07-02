import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";

const Invitations = props => {
    let {match} = props;
    return (
        <div>
            <Typography variant={"h1"}> Invitations {match.params.id} </Typography>
        </div>
    );
};

Invitations.propTypes = {
    type: PropTypes.string
};

export default Invitations;
