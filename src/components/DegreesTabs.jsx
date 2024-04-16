import React, {useState, useEffect} from 'react'
import DegreesGroup from './DegreesGroup.jsx'
import getData from '../utils/getData.js'
import { TabPane, Tab } from 'semantic-ui-react'

import '../assets/css/DegreesTabs.css'


const DegreesTabs = () => {
  // state 
  const [loaded, setLoaded] = useState(false);
  const [degreesObj, setDegreesObj] = useState();
  
  // useEffect
  useEffect(() => {
    getData('degrees/')
        .then((json) => {
            setDegreesObj(json);
            setLoaded(true);
        })
}, []);
  


  const panes = [
    { menuItem: 'Undergraduate', render: () => <TabPane>
      <DegreesGroup degreeGroup={degreesObj.undergraduate}/>
    </TabPane> },
    { menuItem: 'Graduate', render: () => <TabPane>
      <DegreesGroup degreeGroup={degreesObj.graduate}/>
    </TabPane> },
  ]

  // if not loaded
  if (!loaded) return (<><h1>Degrees Loading...</h1></>)

  // return w/ data
  return (
    <div>
      <h1 className='degreeTitle'>Our Degrees</h1>
      <h3 className='peopleSubtitle'>Have a look at the degree programs offered below!</h3>
      <Tab panes={panes} />
    </div>
  )
}

export default DegreesTabs;