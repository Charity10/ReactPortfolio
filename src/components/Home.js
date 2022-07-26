import React from "react";
import img from "../images/DSC_0013.JPG"

import About from "./About";

export default function Home() {
  
    return (
        <div className="home">
            <h2 className="home-text">Hi, I'm Mercy and I Love React.js</h2>
            <img src={img} alt ="" className="home-img" />
      

        </div>
        

    )
}