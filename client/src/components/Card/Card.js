import React from 'react';
import './Card.css';

const Card = ({project, onProjectSelect}) => {
    return (
        <div className='card__front'>
            <h1 onClick={onProjectSelect} value={project.meta}>{project.name}</h1>
        </div>
    )
}

export default Card;