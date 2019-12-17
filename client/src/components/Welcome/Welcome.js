import React from 'react';

import './Welcome.css';

const Welcome = () => {
    return (
    <div className='welcome'>
        <div className='welcome__picture'>
            <div className='welcome__text'>
                <h2>Hi, I'm Ernest Bruno</h2>
                <h2>Front-End Developer</h2>
                <button className='fancy-button'>Learn More About Me!</button>
            </div>
        </div>
    </div>
    );
};

export default Welcome;