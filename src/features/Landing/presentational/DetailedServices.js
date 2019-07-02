import React from 'react';
import {Grid, Paper} from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
// import { GiBrokenHeartZone } from "react-icons/gi";
import Img from "../../util/Img";

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
        width: "100%",
        backgroundColor: "transparent",
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "400px",
        boxShadow: "none",
        // margin: "30px auto",
        display: "flex",
        position: "relative",
    },
    img1:{
        position: "absolute",
        left: "158px",
        height: "100%"
    },
    img2:{
        position: "absolute",
        left: "2px",
        height: "100%"

    },
    img3:{
        position: "absolute",
        top: "42px",
        left: "69px",
        height: "100%"

    },
    centerText:{
        ...styles.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "transparent",
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "400px",
        boxShadow: "none",
        // margin: "30px auto",
    },
    svg:{
        color: theme.palette.secondary.main,
        fontSize: "30px",
    }
});

const DetailedServices = ({classes}) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={8} className={classes.grid}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        {/*<Img src={"./img/Service-1-all.jpg"}  className={classes.img1}/>*/}
                        <Img src={"./img/Service-1-all.jpg"} maxWidth={"100%"} height={"100%"}/>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.centerText}>
                        {/*<GiBrokenHeartZone className={classes.svg} />*/}
                        <Typography variant={"h5"} color={"textPrimary"}> Photography Services </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Get personalized package for your especial day! </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.centerText}>
                        <Typography variant={"h5"} color={"textPrimary"}> Custom Website </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Share info and get RSVPs on your website! </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Img src={"./img/Service-1-all.jpg"} maxWidth={"100%"} height={"100%"}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Img src={"./img/Service-1-all.jpg"} maxWidth={"100%"} height={"100%"}/>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.centerText}>
                        <Typography variant={"h5"} color={"textPrimary"}> Custom Album </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Custom professionally built Album </Typography>

                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.centerText}>
                        <Typography variant={"h5"} color={"textPrimary"}> Registry </Typography>
                        <Typography variant={"subtitle1"} color={"textPrimary"}> Get item from anywhere  </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Img src={"./img/Service-1-all.jpg"} maxWidth={"100%"} height={"100%"}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
DetailedServices.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedServices);

