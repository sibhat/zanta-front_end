import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
let styles = theme =>({
    root:{
        width: "100%",
        height: "200px",
        backgroundColor: theme.palette.background.paper
    }
});
const Footer = ({classes}) => {
    return (
        <div className={classes}>
            footer
        </div>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
