import React, {useState} from 'react';
import './Card.css';

const Card = ({project, onProjectSelect, childProjectSelected}) => {
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

    // const isSelected = childProjectSelected[0] ? childProjectSelected[0].name === project.name : false;
    let blurSwitch =  hover ? 'card__front hover' : 'card__front';
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
                className={blurSwitch}
                style={divStyle} 
                >
            </div>
            {hover ? <h1 className='card__title'>{project.name}</h1> : ''}
        </div>
    )
}

export default Card;