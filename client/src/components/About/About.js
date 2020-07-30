import React from 'react';

import pic from '../../assets/DSC_0421.jpg';

import './About.css';
import Skills from '../Skills/Skills';

const About = (props) => {
    return (
        <div ref={props.refProp} className='about__container'>
            
            <div className='about__description'>
                <div className='about__picture'>
                </div>
                <div className='about__banner'>
                    <h1>About Me</h1>
                    <hr/>
                    <h3>I'm a Seattle-based Front End Web Developer / Engineer.</h3>
                    <h3>
                    I aim to use my skills to develop simple and creative solutions for clients seeking to establish and/or improve their online presence.</h3>
                    <hr/>
                </div>
            </div>
            {/* <div className='about__text'>
                <h1>Skills / Proficiency </h1>
                <Skills/>
            </div> */}
        </div>
    )
}

export default About;