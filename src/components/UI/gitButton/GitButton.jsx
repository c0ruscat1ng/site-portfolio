import React from 'react';
import img from '/public/img/icons/gitHub-black.svg'

const GitButton = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <img src={img} alt=""/>
            GitHub repo
        </a>
    );
};

export default GitButton;