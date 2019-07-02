import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = () => ({
    root: {
        width: "100%",
        height: "100vh",
    },
    card: {
        width: "300px",
        height: "300px",
        textAlign: "center",
        textTransform: 'uppercase',
        border: "1px solid #77777740"
    }
});
 let services =({services, classes, clickHandler}) => {
    return (
        <div className={classes.root}>
            {/*{services}*/}
            <Grid container spacing={40}>
                    {services.map( services =>
                        <Grid item xs={12} sm={6} md={4} key={services.id}>
                            <ButtonBase
                                focusRipple
                                className={classes.card}
                                focusVisibleClassName={classes.focusVisible}
                                onClick={()=> clickHandler(services.id)}
                            >
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    // className={classes.imageTitle}
                                >
                                    {services.type}
                                </Typography>
                                
                            </ButtonBase>
                        </Grid>
                    )}
            </Grid>
        </div>
    );
};

services.propTypes = {
    services: PropTypes.array.isRequired
};
export default withStyles(useStyles)(services);
