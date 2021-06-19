import React from 'react';
import "./projectList.css";

export default function projectList({ id, title, active, setSelect }) {
    return (
        <li 
        className={active ? "projectList active" : "projectList"}
        onClick={()=>setSelect(id)}
        >
            {title}
        </li>
    );
}
