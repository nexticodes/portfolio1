import React, {useState} from 'react';

import Card from './../Card/Card.js';

import './Projects.css';

const Projects = (props) => {

    const [projectSelected, setProjectSelected] = useState([]);

    let projects = [
        {
            name: 'SweatDeckTM App',
            link: 'https://fd-sweatdeck.herokuapp.com',
            meta: 'sweat',
            desc: 'SweatDeck is a web application created in React with Node.js, Express and MongoDB in my backend which gives users access to a deck of cards -- each containing a workout circuit they can complete.\n\n\tThe application also includes a timer that the user can start and pause at will, as well as the functionality to keep a record of their workout in the app\'s database for future reference and viewing.\n\tAs the creator/developer, my responsibilities were to come up with a user-friendly and simple design that captured the vibe taht the physical deck of cards gave.'
        },
        {
            name: 'Optional Boss Website',
            link: 'https://optional-boss.herokuapp.com',
            meta: 'ob',
            desc: 'The Optional Boss E-sports Organization website is an informational site created in React and Node.js, deployed in Heroku, thyat relays information regarding the active members of the organization. The application utilizes the Express library that enables me to connect to third party API\'s -- namely Twitch and Twitter -- and retrieve necessary data to be displayed on the application.\n\tOne of my additional responsibilities was to constantly give updates to the members while also requesting feedback to ensure collective satisfaction regarding the website.' 
        },
        {
            name: 'The Banana App',
            meta: 'banana',
            link: 'https://begoodproject.org',
            desc: 'The Banana App is a React Native / Ruby-on-rails application created and started by The Be Good Project. As one of its most recent additions to its team of volunteer developers, my duty has been to implement changes to the User Interface as reflected on the mock-up on Figma that is regularly updated by the team\'s UI/UX designers.'
        }
    ]

    const handleProjectSelect = (e) => {
        setProjectSelected(projects.filter(p => p.name === e.target.innerHTML));
    }

    return (
        <div ref={props.refProp} className='projects__container'>
            <div className='projects__banner'>
                <h1>Projects</h1>
                <hr/>
                <h4>Listed below are some of the projects that I have been involved with, in no order.{'\n'} Please <span>CLICK</span> on the project cards to learn more.</h4>
                <hr/>
            </div>
            <div className='projects__list'>
                {projects.map((e,i) => <Card key={i} project={e} onProjectSelect={handleProjectSelect} />)}
            </div>
            <div className='project__description'>
                {!projectSelected[0] ? 
                    <h1>Please Click on a Project above</h1> : 
                    <div>
                        <h3>{projectSelected[0].name}</h3>
                        <hr/>
                        <p>{projectSelected[0].desc}</p>
                    </div>}
            </div>
        </div>
    )
}

export default Projects;