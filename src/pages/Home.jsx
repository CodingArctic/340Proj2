// import libraries

// import React from 'react'
// import { useState } from 'react';
import React, { useState } from 'react';
import getData from '../utils/getData.js';

// import components
import NavMenu from '../components/NavMenu.jsx';
import EmploymentSection from '../components/EmploymentSection.jsx';
import PeoplePage from '../pages/PeoplePage.jsx'
import Academics from '../pages/Academics.jsx'

// import css
import '../App.css'

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  // get data
  React.useEffect(() => {
    // runs after loading page rendered
    // using getData method from utils
    getData('about/')
      .then((json) => {
        setAboutObj(json);
        setLoaded(true);
      })
  }, []);

  // returns loading page
  if (!loaded) return (
    <>
      <div className='sticky'>
        <h1>Welcome to the iSchool!</h1>
        <div>Loading...</div>
      </div>
    </>
  );

  return (
    <>
      <div className='sticky'>
        <h1>Welcome to the iSchool!</h1>
        <NavMenu activeItem="home"/>
      </div>
      

      <div className='App'>
        <div className='About'>
          <h1>{aboutObj.title}</h1>
          <h3>{aboutObj.description}</h3>
          <div className='aboutQuote'>
            <h4 className='quote'>{aboutObj.quote}</h4>
            <h4>-- {aboutObj.quoteAuthor}</h4>
          </div>
        </div>
        <hr />
        <EmploymentSection />
        <div id='peopleSection'>
          <PeoplePage />
        </div>
        <div id='academicsSection'>
          <Academics />
        </div>
      </div>
    </>
  );
}

export default Home;
