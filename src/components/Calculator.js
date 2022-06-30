/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles.css';
import calculate from '../logic/calculate';

class CalculatorApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
    };
  }

  newOperation = (symbol) => {
    const { state } = this;
    this.setState(calculate(state, symbol));
  }

  isANumber = (value) => {
    if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5'
    || value === '6' || value === '7' || value === '8' || value === '9' || value === '0') return true;
    return false;
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="my-operand">{next ?? total ?? 0}</div>
        </div>
        <button type="submit" onClick={() => this.newOperation('AC')}>AC</button>
        <button type="submit" onClick={() => this.newOperation('+/-')}>+/-</button>
        <button type="submit" onClick={() => this.newOperation('%')}>%</button>
        <button type="submit" onClick={() => this.newOperation('÷')} className="math-operands">÷</button>
        <button type="submit" onClick={() => this.newOperation('7')}>7</button>
        <button type="submit" onClick={() => this.newOperation('8')}>8</button>
        <button type="submit" onClick={() => this.newOperation('9')}>9</button>
        <button type="submit" onClick={() => this.newOperation('x')} className="math-operands">x</button>
        <button type="submit" onClick={() => this.newOperation('4')}>4</button>
        <button type="submit" onClick={() => this.newOperation('5')}>5</button>
        <button type="submit" onClick={() => this.newOperation('6')}>6</button>
        <button type="submit" onClick={() => this.newOperation('-')} className="math-operands">-</button>
        <button type="submit" onClick={() => this.newOperation('1')}>1</button>
        <button type="submit" onClick={() => this.newOperation('2')}>2</button>
        <button type="submit" onClick={() => this.newOperation('3')}>3</button>
        <button type="submit" onClick={() => this.newOperation('+')} className="math-operands">+</button>
        <button type="submit" onClick={() => this.newOperation('0')} className="span-two">0</button>
        <button type="submit" onClick={() => this.newOperation('.')}>.</button>
        <button type="submit" onClick={() => this.newOperation('=')} className="math-operands">=</button>
      </div>
    );
  }
}
export default CalculatorApp;
