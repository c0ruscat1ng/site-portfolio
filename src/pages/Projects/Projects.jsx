import React from 'react';
import './Projects.scss'
import Project from "../../components/Project/Project.jsx";
import {projects} from "../../helpers/dataProjects.js";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Мои проекты</h2>
                <ul className="projects">
                    {
                        projects.map((project,index)=>{
                            return(
                                <Project
                                    title={project.title}
                                    image={project.img}
                                    key={index}
                                    index={index}
                                    desc={project.desc}
                                />)
                        })
                    }
                </ul>
            </div>
        </main>
    );
};

export default Projects;