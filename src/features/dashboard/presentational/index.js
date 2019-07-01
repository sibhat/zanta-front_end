import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import SwipeableViews from 'react-swipeable-views';
import withStyles from "@material-ui/core/styles/withStyles";
import Services from "../../services/container";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Invitations from "../../invitations/container";
import Portfolio from "../../portofolio/container";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};


const useStyles = theme =>({
    root: {
        flexGrow: 1,
        height: "100vh",
        width: "100%",
        backgroundColor: theme.palette.background.default
    },
    tabs:{
        backgroundColor: theme.palette.background.paper
    }
    
});
function Dashboard ({classes, history}){
    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    function handleChangeIndex(index) {
        setValue(index);
    }
    
    return (
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    className={classes.tabs}
                >
                    <Tab  label={"Service"}/>
                    <Tab  label={"Invitations"}/>
                    <Tab  label={"Portfolio"}/>
                </Tabs>
                <SwipeableViews
                    axis={'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabContainer dir={'"ltr"'}>
                        <Services history={history}/>
                    </TabContainer>
                    <TabContainer dir={'"ltr"'}>
                        <Invitations />
                    </TabContainer>
                    <TabContainer dir={'"ltr"'}>
                        <Portfolio />
                    </TabContainer>
                </SwipeableViews>
            </Paper>
        
    );
}

Dashboard.propTypes = {
    type: PropTypes.string,
};

export default withStyles(useStyles)(Dashboard);
