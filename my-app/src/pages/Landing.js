import "./Landing.css"

import { Link } from "react-router-dom"

function Landing() {
    return (
        <div className="body">
            <h1>This is the Landing</h1>
            <div id="about-content">
                <h2>About</h2>
                <p>This is a quick synopsis of myself</p>
                <Link to="/About">
                    <button>About</button>
                </Link>
            </div>
            <div id="project-content">
                <h2>Projects</h2>
                <p>This is my recent project</p>
                <Link to="/Project">
                    <button>Project</button>
                </Link>
            </div>
            <div id="learn-content">
                <h2>Learn</h2>
                <p>These are some lessons on the content that intrest me or stuff needed to complete some projects</p>
                <Link to="/Learning">
                    <button>Learn</button>
                </Link>
            </div>
            <div id="contact-content">
                <h2>Contact</h2>
                <p>Here is my contact info</p>
                <Link to="/Contact">
                    <button>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing