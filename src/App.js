import React from "react";
import { CssBaseline} from "@material-ui/core";
// import TransitionGroup from "react-transition-group/TransitionGroup";
import Nav from "./features/nav/container";
import Landing from "./features/Landing/container";
import {Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'typeface-roboto';
import Footer from "./features/footer/components";
import Dashboard from "./features/dashboard/container";
import Invitations from "./features/invitations/container";
class App extends React.Component {

    render() {
        return (
            <div className={"root"}>
                <CssBaseline/> {/* reset css for all devices */}
                <ToastContainer />
                {/*<Nav />*/}
                <Route path={"/"} component={Nav} />
                <Route exact path={"/"} component={Landing} />
                <Route exact path={"/dashboard"} component={Dashboard}/>
                <Route path={"/invitations"} component={Invitations}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
