import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className="Calc-link">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
