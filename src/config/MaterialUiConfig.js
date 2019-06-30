import {createMuiTheme} from "@material-ui/core";

export default   createMuiTheme({
    palette: {
        background: {
            default: "#ffffff",
            paper: "#e2e2e2"
        },
        primary: {
            main: "#ffd833"
        },
        secondary: {
            main: "#f30239"
        },
        text: {
            primary: "#000000",
            secondary: "#ff2b4a"
        },
        contrastThreshold: 9,
    },
    typography: {
        useNextVariants: true,
    },
});