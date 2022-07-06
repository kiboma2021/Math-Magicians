/* eslint-disable react/prefer-stateless-function */
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import React, { Component } from 'react';
import Calc from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Qoute';
import NotMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="nav-links">
          <h1>Math Magicians</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/quote">Quote</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calc />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
