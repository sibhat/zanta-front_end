import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";

const Portfolio = () => {
    return (
        <div>
            <Typography variant={"h1"}> Portfolio </Typography> 
        </div>
    );
};

Portfolio.propTypes = {
    type: PropTypes.string
};

export default Portfolio;
