import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { MenuItem, Menu, Segment } from 'semantic-ui-react'

// pass in activeItem so it can be highlighted when page loads
const NavMenu = ({ activeItem }) => {
  const [active, setActive] = useState(activeItem);

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <MenuItem
          href='/cag1831/340/project2/'
          name='home'
          active={active === 'home'}
          onClick={handleItemClick}
        />
        <MenuItem
          href='/cag1831/340/project2/#peopleSection'
          name='people'
          active={active === 'people'}
          onClick={handleItemClick}
        />
        <MenuItem
          href='/cag1831/340/project2/#academicsSection'
          name='academics'
          active={active === 'academics'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}

export default NavMenu;