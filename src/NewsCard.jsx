import React from "react";
const NewsCard=(props)=>{
    return(
        <div className="newsCard">
            <img src={props.img}></img>
            <div>
            <h4>{props.domain}</h4>
            <h5>{props.text}</h5>
            </div>
        </div>
    )
}
export default NewsCard;