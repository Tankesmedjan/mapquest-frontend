import React, {Component} from "react";
import FooterContent from "./FooterContent";

export class Scoreboard extends Component {
    render() {
        const insertFooter = FooterContent
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Scoreboard</h2><br/>

                </div>

                {insertFooter}
            </div>
        )
    }
}

export default Scoreboard