import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import FooterContent from "./FooterContent";

export class About extends Component {
    render() {
        const insertFooter = FooterContent
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>About us</h2>
                    <hr/>
                    <br/>
                    <b>
                        MapQuest is a start-up company created in 2021 by the well known members of
                        the legendary crew "Tankesmedjan".
                        <br/><br/>

                        A crew formed for only one purpose...
                        <br/><br/>

                        Code those apps which hasn't been coded.
                        <br/>
                        Achieve what can't be achieved.
                        <br/>
                        And release Tony&Sunken to the world while doing it.
                        <br/><br/>


                        We are located in Gothenburg, Sweden.<br/>
                        Rosenlundsgatan 6<br/>
                        Rosenlund, 411 20
                    </b>

                    <br/>
                    <br/>
                </div>

                {insertFooter}

            </div>
        )
    }
}
export default About