import React from 'react'
import "./projects.css"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Portfolio </h1>
            <ul className="ul">
                <li className="li">Coding Bootcamp</li>
                <li className="li">Graphic Design</li>
            </ul>
            <div className="container">
                <div className="item">
            <img className="img" src="../assets/images/podcastJunkie.png" alt=""></img>
            <h3 className="h3"> Podcast Junkie</h3>
            </div>
            </div>
        </div>
    )
}
