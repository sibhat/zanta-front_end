import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import { GiBrokenHeartZone } from "react-icons/gi";

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
        boxShadow: "none"
    },
    svg:{
        color: theme.palette.secondary.main,
        fontSize: "30px",
    }
});

const Services = ({classes}) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={8} className={classes.grid}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <GiBrokenHeartZone className={classes.svg} />
                        <Typography variant={"h5"} color={"textPrimary"}> Photography Services </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Get personalized package for your especial day! </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <GiBrokenHeartZone className={classes.svg} />
                        <Typography variant={"h5"} color={"textPrimary"}> Custom Website </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Share info and get RSVPs on your website! </Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <GiBrokenHeartZone className={classes.svg} />
                        <Typography variant={"h5"} color={"textPrimary"}> Custom Album </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Custom professionally built Album </Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <GiBrokenHeartZone className={classes.svg} />
                        <Typography variant={"h5"} color={"textPrimary"}> Registry </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Get item from anywhere  </Typography>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
Services.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);

