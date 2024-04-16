import React, { useState, useEffect } from 'react';
import getData from '../utils/getData.js';
import StatCard from '../components/StatCard.jsx';
import CoopTable from '../components/CoopTable.jsx';
import EmploymentTable from '../components/EmploymentTable.jsx';

import '../assets/css/EmploymentSection.css';

const EmploymentSection = () => {
    const [loaded, setLoaded] = useState(false);
    const [employmentObj, setEmploymentObj] = useState();

    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setEmploymentObj(json);
                setLoaded(true);
            })
    }, []);

    if (!loaded) return (<><h1>Employment Loading...</h1></>)

    return (
        <>
            <div className='employmentSection'>
                <h1>Our Employment Stats</h1>
                <h2>{employmentObj.degreeStatistics.title}</h2>
                <div className='statCardContainer'>
                    {employmentObj.degreeStatistics.statistics.map((s) =>
                        <StatCard key={s.value} value={s.value} description={s.description} />
                    )}
                </div>
                <hr />
                <h2>Titles our students are getting</h2>
                {/* create div for each title and style later */}
                <div className='horizontalList'>
                    {employmentObj.careers.careerNames.map((c) =>
                        <div className='horizontalListItem' key={c}>{c}</div>
                    )}
                </div>
                <h2>Companies they're working at</h2>
                <div className='horizontalList'>
                    {employmentObj.employers.employerNames.map((e) =>
                        <div className='horizontalListItem' key={e}>{e}</div>
                    )}
                </div>
                <hr />
                <h1>{employmentObj.introduction.title}</h1>
                <h2>{employmentObj.introduction.content[0].title}</h2>
                <div className='employmentDescription'>{employmentObj.introduction.content[0].description}</div>
                <EmploymentTable data={employmentObj.employmentTable.professionalEmploymentInformation} />
                <h2>{employmentObj.introduction.content[1].title}</h2>
                <div className='employmentDescription'>{employmentObj.introduction.content[1].description}</div>
                <CoopTable data={employmentObj.coopTable.coopInformation}/>
            </div>
        </>
    )
}

export default EmploymentSection;