import React from "react";
import './About.css';

function About(props) {
    console.log(props);
    return(
       <div className="about__container">
        <span>
            "FreeDom is the FreeDom to say that two make four.
            if that is granted, all else follows."
        </span>
        <span>- Gerorge Orwell, 1984</span>
       </div> 
    ) ;
}

export default About;