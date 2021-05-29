import React from "react";

export default function Teams() {
    const availableTeams = false
    return (
        <div className="wrapper-teams">
            {!availableTeams ? (
                <>You have not created any teams yet, please create a new team.</>
            ) : (
                <>Listing available teams<br/></>
            )}
        </div>
    )
}

