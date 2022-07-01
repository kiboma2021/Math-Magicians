import React, { useState } from 'react';
import '../styles.css';
import calculate from '../logic/calculate';

const CalculatorApp = () => {
  const [calc, calcNum] = useState([]);
/*  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
    };
  }
*/
  mathOperation = (symbol) => {
    const { state } = this;
    this.setState(calculate(state, symbol));
  }

  isANumber = (value) => {
    if (value === '1' || value === '2' || value === '3' || value === '4' || value === '5'
    || value === '6' || value === '7' || value === '8' || value === '9' || value === '0') return true;
    return false;
  }

//  const { total, next } = this.state;
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="my-operand">{next ?? total ?? 0}</div>
      </div>
      <button type="submit" onClick={() => this.mathOperation('AC')}>AC</button>
      <button type="submit" onClick={() => this.mathOperation('+/-')}>+/-</button>
      <button type="submit" onClick={() => this.mathOperation('%')}>%</button>
      <button type="submit" onClick={() => this.mathOperation('÷')} className="math-operands">÷</button>
      <button type="submit" onClick={() => this.mathOperation('7')}>7</button>
      <button type="submit" onClick={() => this.mathOperation('8')}>8</button>
      <button type="submit" onClick={() => this.mathOperation('9')}>9</button>
      <button type="submit" onClick={() => this.mathOperation('x')} className="math-operands">x</button>
      <button type="submit" onClick={() => this.mathOperation('4')}>4</button>
      <button type="submit" onClick={() => this.mathOperation('5')}>5</button>
      <button type="submit" onClick={() => this.mathOperation('6')}>6</button>
      <button type="submit" onClick={() => this.mathOperation('-')} className="math-operands">-</button>
      <button type="submit" onClick={() => this.mathOperation('1')}>1</button>
      <button type="submit" onClick={() => this.mathOperation('2')}>2</button>
      <button type="submit" onClick={() => this.mathOperation('3')}>3</button>
      <button type="submit" onClick={() => this.mathOperation('+')} className="math-operands">+</button>
      <button type="submit" onClick={() => this.mathOperation('0')} className="span-two">0</button>
      <button type="submit" onClick={() => this.mathOperation('.')}>.</button>
      <button type="submit" onClick={() => this.mathOperation('=')} className="math-operands">=</button>
    </div>
  );
};

export default CalculatorApp;
