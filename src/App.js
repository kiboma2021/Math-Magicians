/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CalculatorApp from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalculatorApp />
      </div>
    );
  }
}
export default App;
