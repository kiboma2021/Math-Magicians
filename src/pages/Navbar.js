import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h1>Math Magicians</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quotes">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
