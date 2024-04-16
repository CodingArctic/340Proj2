import React, {useState, useEffect} from 'react'
import PeopleGroup from './PeopleGroup.jsx'
import getData from '../utils/getData'
import { TabPane, Tab } from 'semantic-ui-react'

import '../assets/css/People.css'


const PeopleTabs = () => {
  // state 
  const [loaded, setLoaded] = useState(false);
  const [peopleObj, setPeopleObj] = useState();
  
  // useEffect
  useEffect(() => {
    getData('people/')
        .then((json) => {
            setPeopleObj(json);
            setLoaded(true);
        })
}, []);
  


  const panes = [
    { menuItem: 'Faculty', render: () => <TabPane>
      <PeopleGroup title="Faculty" whichGroup={peopleObj.faculty}/>
    </TabPane> },
    { menuItem: 'Staff', render: () => <TabPane>
      <PeopleGroup title="Staff" whichGroup={peopleObj.staff}/>
    </TabPane> },
  ]

  // if not loaded
  if (!loaded) return (<><h1>People Loading...</h1></>)

  // return w/ data
  return (
    <div>
      <h1 className='peopleTitle'>{peopleObj.title}</h1>
      <h3 className='peopleSubtitle'>{peopleObj.subTitle}</h3>
      <Tab panes={panes} />
    </div>
  )
}

export default PeopleTabs