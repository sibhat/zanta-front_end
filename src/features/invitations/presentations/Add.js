import React from 'react';
// import PropTypes from 'prop-types';
import {FormControl, InputLabel, Input, FormHelperText} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Button from "@material-ui/core/Button";

const useStyles = () => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column",
        maxWidth: "400px",
        margin: "auto",
    },
    formControl: {
        // margin: theme.spacing(1),
        color: "black",
    },
});
const Add = ({type, headline, location, description, handleChange, classes, createInvitation}) => {
    return (
            <form className={classes.container} onSubmit={createInvitation}>
                
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">headline</InputLabel>
                    <Input id="component-simple" value={headline} name={"headline"} onChange={handleChange} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-helper">location</InputLabel>
                    <Input
                        id="component-helper"
                        value={location}
                        onChange={handleChange}
                        name={"location"}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">Location of your service</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-helper2">description</InputLabel>
                    <Input id="component-helper2" value={description} name={"description"} onChange={handleChange} />
                </FormControl>
                <div>
                    <Button variant="contained" color="primary" className={classes.button} onClick={createInvitation}>
                        Create Invitation
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Cancle
                    </Button>
                </div>
            </form>
    );
};

Add.propTypes = {
    
};

export default withStyles(useStyles)(Add);
