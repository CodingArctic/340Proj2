import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { MenuItem, Menu, Segment } from 'semantic-ui-react'

import ritTiger from '../assets/img/rittiger.png';

// pass in activeItem so it can be highlighted when page loads
const NavMenu = ({ activeItem }) => {
  const [active, setActive] = useState(activeItem);

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <div className='sticky'>
      <h1>Welcome to the iSchool!</h1>
      <Segment inverted style={{ margin: 0, padding: 0 }}>
        <Menu inverted secondary>
          <MenuItem
            href='/'
            name='home'
            onClick={handleItemClick}>
            <a href='/'><img src={ritTiger} alt='RIT Tiger Logo' width="52px" /></a>
          </MenuItem>
          <MenuItem
            href='/'
            name='home'
            active={active === 'home'}
            onClick={handleItemClick}
          />
          <MenuItem
            href='/people'
            name='people'
            active={active === 'people'}
            onClick={handleItemClick}
          />
          <MenuItem
            href='/academics'
            name='academics'
            active={active === 'academics'}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
    </ div>
  );
}

export default NavMenu;