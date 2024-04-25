import React from 'react';

import NavMenu from '../components/NavMenu.jsx';
import PeopleTabs from '../components/PeopleTabs.jsx';

const Degrees = () => {

    return (
        <>
            <NavMenu activeItem='people' />
            <div className='content'>
                <PeopleTabs />
            </div>
        </>
    )
}

export default Degrees;