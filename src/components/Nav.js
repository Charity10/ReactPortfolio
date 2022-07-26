import React from "react";
import Home from "./Home";
import About from "./About";


export default function Nav () {
    const [isClicked, setIsClicked] = React.useState("false")
    function navButton() {
          setIsClicked(!isClicked)
    }
    return(
     < div>  
     <h1 className="nav--bar">A Little About Mercy</h1>
       <div className="nav">
       <button className="but" onClick={navButton}>{isClicked ? "Home" : "About"}</button>
        {isClicked ? <Home /> : <About />}
       </div>
      
        
        </div> 
    )
}