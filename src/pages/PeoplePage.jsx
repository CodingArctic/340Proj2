import React from 'react';

import NavMenu from '../components/NavMenu.jsx';
import PeopleTabs from '../components/PeopleTabs.jsx';

const Degrees = () => {

    return (
        <>
            <div className='sticky'>
                <h1>Welcome to the iSchool!</h1>
                <NavMenu activeItem="people" />
            </div>
            <div className='content'>
                <PeopleTabs />
            </div>
        </>
    )
}

export default Degrees;