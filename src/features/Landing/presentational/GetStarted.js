import React from 'react';
import {Grid, Paper} from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: "30px 50px",
    },
    grid:{
        borderBottom: "1px solid #80808054",
    },
    paper: {
        // padding: theme.spacing(2),
        backgroundColor: "transparent",
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "200px",
        boxShadow: "none",
        img:{
            height: "100%",
        }
    },
    svg:{
        color: theme.palette.secondary.main,
        fontSize: "30px",
    }
});

const GetServices = ({classes}) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={8} className={classes.grid}>
                <Grid item xs={12} sm={4} >
                    <Paper className={classes.paper}>
                        <Typography variant={"h5"} color={"textPrimary"}> Registry </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Get item from anywhere  </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        photo holder
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
GetServices.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetServices);

