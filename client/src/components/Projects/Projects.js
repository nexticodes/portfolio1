import React from 'react';

import Card from './../Card/Card.js';

import './Projects.css';

const Projects = () => {

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
        <div className='projects'>
            <div className='projects__text'>
                <h1>Here are some of the projects that I have made</h1>
            </div>
            {projects.map((e,i) => <Card project={e}/>)}
        </div>
    )
}

export default Projects;