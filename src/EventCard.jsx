import React from "react";
const EventCard=(props)=>{
    return(
        <div className="EventCard">
            <img src={props.img}></img>
            <div className="padding_">
            <h5>Buisness</h5>
            <h4>Before Newyork Auto Show,Cars take their own star turns</h4>
            </div>
        </div>
    )
}
export default EventCard;