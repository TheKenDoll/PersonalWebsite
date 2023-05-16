import React from "react"
import "./About.css"

function About() {
    return (
        <div className="body">
            <h1>About Page</h1>
            <div id="main-about">
                <img id="main-about-pic" src={require("./tempAboutPic.jpg")} alt="not found"></img>
                <div id="main-about-words">
                <h2>Kenzie Fjestad</h2>
                    <p>
                        Kenzie Fjestad is a dedicated and ambitious software engineering student with an unwavering drive for success. 
                        With a keen eye for detail and a strong problem-solving mindset, Kenzie thrives on tackling complex coding challenges. 
                        Their relentless pursuit of knowledge and eagerness to embrace new technologies make them a promising talent in the field.
                    </p>
                </div>
            </div>

            <div id="early-about">
                <h2>Early Years</h2>
            </div>

            <div id="school-about">
                <h2>Education</h2>
            </div>

            <div id="interest-about">
                <h2>Interests</h2>
            </div>

            <div id="career-about">
                <h2>Career Goals</h2>
            </div>
        </div>
    )
}

export default About