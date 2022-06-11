import React from "react";
import Email from "../../images/Email-button.png";
import Linkedin from "../../images/Linkedin-button.png";
import "./SocialMediaButtons.css"

function SocialMediaButtons(){
    return(
        <div className="Container-buttons">
            <img className="Email" src={Email}/>
            <img className="Linkedin"src={Linkedin}/>
        </div>
    )
}

export default SocialMediaButtons;