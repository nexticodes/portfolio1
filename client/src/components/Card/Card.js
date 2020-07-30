import React, {useState} from 'react';
import './Card.css';

const Card = ({project, onProjectSelect, childSelectedProject}) => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(true);
    }

    const handleLeave = () => {
        setHover(false)
    }

    const handleClick = () => {
        onProjectSelect(project.name);
    }

    let divClass = hover ? 'card__front hover' : 'card__front';
    const divStyle = {
        backgroundImage: `url(${project.pic})`,
        backgroundColor: project.bg
    }

    return (
        <div 
            style={{width: '60vw'}}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}>
            <div     
                className={hover ? 'card__front hover' : 'card__front'}
                style={divStyle} 
                >
            </div>
            {hover ? <h1 className='card__title'>{project.name}</h1> : ''}
        </div>
    )
}

export default Card;