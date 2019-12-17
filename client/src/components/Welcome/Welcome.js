import React from 'react';

import './Welcome.css';

const Welcome = (props) => {
    return (
    <div className='welcome'>
        <div className='welcome__picture'>
            <div className='welcome__text'>
                <h2>Hi, I'm Ernest Bruno.</h2>
                <h2>I am a Front-End Web Developer.</h2>
                <button onClick={props.scroll} className='fancy-button'>Learn More About Me!</button>
            </div>
        </div>
    </div>
    );
};

export default Welcome;