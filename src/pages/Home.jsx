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
        <h1>Loading...</h1>
    </>
  );

  return (
    <>
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
      </div>
    </>
  );
}

export default Home;
