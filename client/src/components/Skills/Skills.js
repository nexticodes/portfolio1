import React from 'react';

import './Skills.css';

import ProgressBar from '../ProgressBar/ProgressBar';

const Skills = () => {

    const stats = [
        {
            name: 'HTML',
            level: 80
        },
        {
            name: 'CSS',
            level: 60
        },
        {
            name: 'JavaScript',
            level: 80
        },
        {
            name: 'React',
            level: 80
        },
        {
            name: 'Node.js',
            level: 70
        },
        {
            name: 'GraphQL',
            level: 50
        },
        {
            name: 'C#',
            level: 50
        },
        {
            name: 'UI/UX Design',
            level: 35
        }

    ]
    return (
        <div className='skills__container'>
            <div className='skill__names'>
                {stats.map( (e,i) => <h3 keys={i}>{e.name}</h3> )}
            </div>
            <div className='skill__bars'>
                {stats.map( (e,i) => {
                return <div className='skill'><ProgressBar keys={i} percentage={e.level}/><h4>{e.level}%</h4></div>
                })}
            </div>
        </div>
    )
}

export default Skills;