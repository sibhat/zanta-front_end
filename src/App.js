import React from "react";
import { CssBaseline} from "@material-ui/core";
// import TransitionGroup from "react-transition-group/TransitionGroup";
import Nav from "./features/nav/container";

class App extends React.Component {

    render() {
        return (
            <div className={"root"}>
                <CssBaseline/> {/* reset css for all devices */}
                <Nav/>
            </div>
        );
    }
}


export default App;
