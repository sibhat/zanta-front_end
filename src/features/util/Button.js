import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom'

export default  class extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        className: PropTypes.string,
        maxWidth: PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.string,
        variant: PropTypes.string,
    };
    fontSizeHandler = () =>{
         switch (this.props.size) {
            case "sm":
                return "12px";
            case "md":
                return "16px";
            case "lg":
                return "20px";
            case "xl":
                return "25px";
            default:
                return "30px";
        }
    };
    widthHandler = () =>{
        switch (this.props.size) {
            case "sm":
                return "100px";
            case "md":
                return "150px";
            case "lg":
                return "200px";
            case "xl":
                return "250px";
            default:
                return "300px";
        }
    };
    styles = theme => ({
        content:{
            "background-color": this.props.color === "primary" ? theme.palette.primary.main : theme.palette.secondary.main,
            "color": this.props.color === "primary" ? theme.palette.text.primary : theme.palette.text.secondary,
            // "max-width": this.props.maxWidth,
            "font-size": this.fontSizeHandler(),
            "margin": "10px",
            "width": this.widthHandler(),
            "height": "50px",
            "display": "inline-flex",
            "justify-content": "space-around",
            "align-items": "center",
            "border-radius": "10px",
            // "text-shadow": "1px 5px 11px #00000085",
        }
    });
    div = classesObj => {
        let {value, to, color} = this.props;
        let {classes:{content}} = classesObj;
        return <Link component={RouterLink} to={to} className={content} color={color}>
            {value}
        </Link>
    };

    Styled = withStyles(this.styles)(this.div);

    render() {
        return <this.Styled/>
    }
};
