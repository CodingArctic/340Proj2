import React, {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

import MinorsGroup from '../components/MinorsGroup.jsx';

import '../assets/css/MinorsList.css'


const MinorsList = () => {
    const [loaded, setLoaded] = useState(false);
    const [minorsObj, setMinorsObj] = useState();


    useEffect(() => {
        getData('minors/')
            .then((json) => {
                setMinorsObj(json);
                setLoaded(true);
            })
    }, []);

    if (!loaded) return (<><h1>Minors Loading...</h1></>)

    return (
        <>
            <h1 className='minorsTitle'>Our Minors</h1>
            <h3 className='minorsDescription'>Have a look at our minors offered below!</h3>
            <MinorsGroup data={minorsObj.UgMinors} />
        </>
    )
}

export default MinorsList;