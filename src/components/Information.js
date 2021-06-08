import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import FooterContent from "./FooterContent";

export class Information extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Information</h2>
                    <hr/>
                    <br/>
                    <b>
                    MapQuest is a a web-based platform-based game application.
                        <br/>
                        It is aimed at children and adolescents aged 7-12 years.
                        <br/>
                        <br/>
                        Later releases are intended to be able to offer adapted content to both older young people and adults.
                        <br/>
                        You buy access to systems where you get access to lots of activities and can use
                        "complete" game stories or customize your own stories based on the activities MapQuest has provided.
                        <br/>
                        <br/>
                        After purchase you gain access to a system for building an adventure game, you choose the venue on a map,
                        a background story and places pins on the map for the assignments or questions you think fit well.
                        When you are done, you activate the game and it is then available for 24 hours for the players.
                        <br/>
                        <br/>
                        The game is map / geo based (via Google) where the game leader (usually an adult) puts out pins on a map and the players
                        may then walk around and complete the activities to collect points for their assigned teams.
                    </b>

                    <br/>
                    <br/>
                </div>

               <FooterContent/>

            </div>
        )
    }
}
export default Information