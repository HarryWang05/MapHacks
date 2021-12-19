import React from "react"
import "../stylesheets/header.css"
import img1 from "../assets/geocarter1.png"
import img2 from "../assets/geocarter2.png"


function Header() {
    return (
    <div className="App-header">
        <div className="columns">
            <h1 className="leftcolumn">What is Geo-Carter? <hr></hr> Geo-Carter is a single player navigation game, where the player explores the open world and memorizes the surroundings, they will then get the chance to recreate the landscape using only their memory!</h1>
            <h1 className="rightcolumn">Why Geo-Carter? <hr></hr> Geo-Carter helps its users improve their memory and learn more about cartography.</h1>
        </div>
        <div className="columns">
            <img src={img1} alt = "geocarter 1" className="leftcolumn"></img>
            <img src={img2} alt = "geocarter 2" className="rightcolumn"></img>
        </div>
    </div>

    

    )
}

export default Header;