import React from "react";
import Facebook from "../../images/Facebook-Icon.png";
import Github from "../../images/GitHub-Icon.png";
import Instagram from "../../images/Instagram-Icon.png";
import Twitter from"../../images/Twitter-Icon.png";
import "./CardFooter.css"

function CardFooter(){
    return(
        <div className="Card-Footer">
            <img src={Facebook}/>
            <img src={Github}/>
            <img Src={Instagram}/>
            <img Src={Twitter}/>
        </div>
    )
}

export default CardFooter;