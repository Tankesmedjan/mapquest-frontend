import React from "react";

const FooterContent = props => {
    return (
        <div className="wrapper-footer">
            <div className="logo-holder">
                <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
            </div>
            <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
        </div>
    )
}
export default FooterContent();
