import React from "react";
import CardTitle from "./CardTitle";
import SocialMediaButtons from "./SocialMediaButtons";
import CardText from "./CardText";
import CardFooter from "./CardFooter";
import CardPhoto from "./CardPhoto";
import "./CardContent.css"

function CardContent(){
    return (
        <div className="Container">
            <div className="Container-Card">
                <CardPhoto/>
                <CardTitle/>
                <SocialMediaButtons/>
                <CardText/>
                <CardFooter/>
            </div>
        </div>
    )
}

export default CardContent;