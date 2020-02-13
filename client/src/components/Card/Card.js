import React from 'react';

const Card = (props) => {
    return (
        <div className='scene'>
            <div className='card__front'>
                {props.project.name}
            </div>
            <div className='card__back'>
                {props.project.link}
            </div>
        </div>
    )
}

export default Card;