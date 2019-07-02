import React from 'react';
import Img from "../../util/Img";
import "./Landing.css"
import Button from "../../util/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const Landing = () => {
    return (
        <div className={"landing"}>
            <Img background={"./img/Landing-1.jpg"} maxWidth={"100%"} />
            <div className={"landing_info"}>
                <Typography variant="h2" component="h2" gutterBottom color={"textSecondary"} className={"text_shadow"}>
                    Zanta Photography
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom color={"textSecondary"} className={"text_shadow"}>
                    Let our lens tell your story!
                </Typography>
                <Grid container="true" spacing={8}>
                    <Grid item sm={6}>
                        <Button to={"/auth"} value={"Sign Up"} size={"lg"} color={"primary"}/>

                    </Grid>
                    <Grid item sm={6}>
                        <Button to={"/lookup"} value={"Find a Couple"} size={"lg"} color={"primary"}/>
                        <br/>
                        Already a member? <Button to={"/login"} value={"Login"} size={"sm"} color={"primary"}/>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    );
};

Landing.propTypes = {
    
};

export default Landing;
