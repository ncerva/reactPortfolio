import React, { useEffect, useState } from 'react';
import ProjectList from '../projectList/projectList.js';
import "./projects.css";
import {
    featuredProjects,
    Coding,
    graphicDesign
} from "../../data.js";

export default function Projects() {
    const [select, setSelect] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "FEATURED",
        },
        {
            id: "coding",
            title: "CODING",
        },
        {
            id: "graphicDesign",
            title: "GRAPHIC DESIGN",
        },
    ];

    useEffect(() => {
        switch (select) {
            case "featured":
                setData(featuredProjects);
                break;
                case "coding":
                setData(Coding);
                break;
                case "graphicDesign":
                setData(graphicDesign);
                break;
                default: setData(featuredProjects);
        }
    }, [select]);

    return (
        <div className="projects" id="projects">
            <ul>
            {list.map((item)=>(
                <ProjectList 
                title={item.title} 
                active={select === item.id}
                setSelect={setSelect}
                id={item.id}/>
            ))}
            </ul>
            
            <div className="container">
                {data.map((d) => (
                    <div className="item">
            <img className="img" 
            src={d.img} 
            alt=""></img>
            <h3 className="h3"> {d.title}</h3>
            </div>
                ))}
            </div>
        </div>
    );
}
