import React from "react";

const FooterContentWoLogo = () => {
    return (
        <div className="wrapper-footer">
            <div className="logo-holder" style={{marginTop: "130px"}}>
                <br/>
                &reg;&copy; 2021 - Tankesmedjan.
            </div>
            <a href="/"><img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/></a>
        </div>
    )
}
export default FooterContentWoLogo

