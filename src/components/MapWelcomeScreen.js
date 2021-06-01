import React from "react";

function MapWelcomeScreen() {

    function hideThisWindow() {
        document.getElementById("welcomescreen").style.display="none"
    }

        return (
            <div className="welcome-screen-wrapper" id="welcomescreen">
            <div className="welcome-screen">
                <h3>Welcome to the Story Board</h3><br/>
                <h6>Chosen story: Pirates of Näset</h6>
                <h6>Playing in team: Hasses Sega Gubbar</h6>
                <hr/>
                <div style={{paddingLeft: "50px",paddingRight: "50px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>

                <hr/>
                <button onClick={hideThisWindow} className="btn btn-dark"> Let's start the game!</button>
            </div>
            </div>
        )
    }
    export default MapWelcomeScreen