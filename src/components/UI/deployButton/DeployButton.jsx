import React from 'react';

import img from "../../../../public/img/icons/deploy.svg";

const DeployButton = ({link}) => {
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <img src={img} alt="" style={{height:'24px'}}/>
                Посмотреть сайт
            </a>
        </div>
    );
};

export default DeployButton;