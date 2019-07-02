import React, {Component} from 'react';
import Landing from "../presentational";
import Services from "../presentational/Services";
import DetailedServices from "../presentational/DetailedServices";
import GetServices from "../presentational/GetStarted";
export default  class extends Component {
   
    render() {
        return (
            <div>
                <Landing />
                <Services />
                <DetailedServices />
                <GetServices /> 
            </div>
        );
    }
}


