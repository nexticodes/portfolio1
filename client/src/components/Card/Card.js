import React, {useState} from 'react';
import './Card.css';

const Card = ({project, onProjectSelect}) => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(true);
    }

    const handleLeave = () => {
        setHover(false)
    }
    
    const handleSelect = (e) => {
        onProjectSelect(e);
        console.log(e);
    }


    return (
        <div 
            style={{width: '60vw'}} 
            onClick={handleSelect} 
            value={project.meta}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}>
            <div
                className={hover ? 'card__front hover' : 'card__front'}
                style={
                    {
                        backgroundImage: `url(${project.pic})`,
                        backgroundColor: project.bg
                    }
                } 
                >
            </div>
            {hover ? <h1 className='card__title'>{project.name}</h1> : ''}
        </div>
    )
}

export default Card;