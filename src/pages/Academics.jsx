import React, { useState } from 'react';
import getData from '../utils/getData.js';

import NavMenu from '../components/NavMenu.jsx';
import DegreesTabs from '../components/DegreesTabs.jsx';
import MinorsList from '../components/MinorsList.jsx';

import '../assets/css/Academics.css';

const Academics = () => {
    const [loaded, setLoaded] = useState(false);
    const [aboutObj, setAboutObj] = useState();

    return (
        <>
            <NavMenu activeItem='academics' />
            <div className='content'>
                <DegreesTabs />
                <MinorsList />
            </div>
        </>
    )
}

export default Academics;