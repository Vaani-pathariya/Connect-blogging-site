import React from "react";
import "./style.css"
const Navbar=()=>{
    return(
        <div className="Navbar">
        <div className="Navbar_logo">
            <h1>Connect!</h1>
        </div>
        <div>
            <ul className="list">
                <li>Latest News</li>
                <li>Politics</li>
                <li>Business</li>
                <li>Sports</li>
                <li>History</li>
                <button className="Write">Write</button>
            </ul>
        </div>
        <div>
            <input type="text" placeholder="Search blogs" className="search"></input>
        </div>
        </div>
    )
}
export default Navbar;