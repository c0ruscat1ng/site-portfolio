import React from 'react';
import {useParams} from "react-router-dom";
import './MyProject.scss'
import GitButton from "../../components/UI/gitButton/GitButton.jsx";
import {projects} from "../../helpers/dataProjects.js";
import DeployButton from "../../components/UI/deployButton/DeployButton.jsx";


const MyProject = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.img} alt="" className="project-details__cover"/>
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    <div className="project-details__buttons">
                        {
                            project.hasOwnProperty('deployLink') && <DeployButton link={project.deployLink}/>
                        }
                        <GitButton link={project.gitLink}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyProject;