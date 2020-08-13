import React from 'react';

import './Drawer.css';

const Drawer = props => {
    let drawerClasses = 'drawer';

    if (props.show) {
        drawerClasses = 'drawer open'
    }
    return (
        <div className={drawerClasses}>
            <ul>
                <li onClick={props.toAbout}>About</li>
                <li onClick={props.toProject}>Projects</li>
                <li onClick={props.toContact}>Contact</li>
            </ul>
        </div>
    )
}

export default Drawer;