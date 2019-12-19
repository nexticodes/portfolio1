import React from 'react';

import Card from './../Card/Card.js';

import './Projects.css';

const Projects = (props) => {

    let projects = [
        {
            name: 'SweatDeckTM App',
            link: 'https://fd-sweatdeck.herokuapp.com'
        },
        {
            name: 'Optional Boss Website',
            link: 'https://optional-boss.herokuapp.com'
        }
    ]
    return (
        <div ref={props.refProp} className='projects__container'>
            <div className='projects__banner'>
                <h1>Projects</h1>
                <hr/>
                <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
                <hr/>
            </div>
            {projects.map((e,i) => <Card project={e}/>)}
        </div>
    )
}

export default Projects;