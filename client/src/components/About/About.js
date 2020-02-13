import React from 'react';

import pic from '../../assets/NexDia.png'

import './About.css';
import Skills from '../Skills/Skills';

const About = (props) => {
    return (
        <div ref={props.refProp} className='about__container'>
            <h1>About Me</h1>
            <div className='about__description'>
                <div className='about__picture'>
                    <img className='profilePic' src={pic}/>
                </div>
                <div className='about__banner'>
                
                    <hr/>
                    <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
                    <hr/>
                </div>
            </div>
            <div className='about__text'>
                <h1>Skills / Proficiency </h1>
                <Skills/>
            </div>
        </div>
    )
}

export default About;