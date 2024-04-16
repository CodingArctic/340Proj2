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
          href='/340Proj2/'
          name='home'
          active={active === 'home'}
          onClick={handleItemClick}
        />
        <MenuItem
          href='/340Proj2/people'
          name='people'
          active={active === 'people'}
          onClick={handleItemClick}
        />
        <MenuItem
          href='/340Proj2/academics'
          name='academics'
          active={active === 'academics'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}

export default NavMenu;