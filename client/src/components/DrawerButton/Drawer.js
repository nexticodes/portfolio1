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
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Drawer;