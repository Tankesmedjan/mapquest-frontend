import React from "react";

const FooterContent = () => {
    return (
        <div className="wrapper-footer">
            <div className="logo-holder">
                <a href="/"><img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/></a><br/>
                &reg;&copy; 2021 - Tankesmedjan.
            </div>
            <a href="/"><img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/></a>
        </div>
    )
}
export default FooterContent();
