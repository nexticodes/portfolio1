import React from 'react';
import './Card.css';

const Card = ({project, onProjectSelect}) => {
    return (
        <div className='card__front' onClick={onProjectSelect} value={project.meta}>
            <h1 className='card__title'>{project.name}</h1>
        </div>
    )
}

export default Card;