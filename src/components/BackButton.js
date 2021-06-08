import { useHistory } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import React from "react";

export const BackButton = () => {
    let history = useHistory()
    return (
        <>
            <a href="#!" className="btn btn-dark" onClick={() => history.goBack()}><Icon.BackspaceFill size="18px" style={{marginTop: "-3px"}}/> GO BACK</a>
        </>
    )
}
export default BackButton