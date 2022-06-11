import React from "react";

import Photo from "../../images/img1.png";
import "./CardPhoto.css";

function CardPhoto(){
    return(
        <div className="Container-Photo">
            <img className="Photo" src={Photo}/>
        </div>
    )
}

export default CardPhoto;