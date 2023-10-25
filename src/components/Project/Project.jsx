import React from 'react';
import {NavLink} from "react-router-dom";
import './Project.scss'

const Project = ({title,image,index,desc}) => {
    return (
        <NavLink to={`/MyProject/${index}`}>
            <li className="project">
                <img src={image}
                     alt={title}
                     className="project__img"
                />
                <h3 className="project__title">{title}</h3>
                <div className="project__desc">{desc}</div>
            </li>
        </NavLink>
    );
};

export default Project;