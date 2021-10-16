import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import NavBarStyle from './NavBar.module.css';
import 'boxicons';

const NavBar = () => (
  <nav className={NavBarStyle.navContent}>
    <NavLink key={uuidv4()} to="/home">
      <box-icon name="left-arrow" type="solid" color="#f8f8f8" />
    </NavLink>
    <div>
      <NavLink key={uuidv4()} to="/home" className={NavBarStyle.navLink}>Home</NavLink>
      <NavLink key={uuidv4()} to="/my-profile" className={NavBarStyle.navLink}>Repository</NavLink>
    </div>
  </nav>
);

export default NavBar;
