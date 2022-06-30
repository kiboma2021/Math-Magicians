/* eslint-disable no-eval */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState } from 'react';
import '../styles.css';

// class CalculatorApp extends Component {
// render() {

function CalculatorApp() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['+', '-', 'x', '/', '%', '.'];

  const updateCalc = (value) => {
    if (
      ops.includes(value) && calc === ''
      || ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value));
    }
  };
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{ calc || '0'}</div>
        <div className="current-operand">{ result ? { result } : ''}</div>
      </div>
      <button type="submit">AC</button>
      <button type="submit">+/-</button>
      <button type="submit" onClick={() => updateCalc('%')}>%</button>
      <button type="submit" className="math-operands" onClick={() => updateCalc('/')}>/</button>
      <button type="submit" onClick={() => updateCalc('7')}>7</button>
      <button type="submit" onClick={() => updateCalc('8')}>8</button>
      <button type="submit" onClick={() => updateCalc('9')}>9</button>
      <button type="submit" className="math-operands" onClick={() => updateCalc('x')}>x</button>
      <button type="submit" onClick={() => updateCalc('4')}>4</button>
      <button type="submit" onClick={() => updateCalc('5')}>5</button>
      <button type="submit" onClick={() => updateCalc('6')}>6</button>
      <button type="submit" className="math-operands" onClick={() => updateCalc('-')}>-</button>
      <button type="submit" onClick={() => updateCalc('1')}>1</button>
      <button type="submit" onClick={() => updateCalc('2')}>2</button>
      <button type="submit" onClick={() => updateCalc('3')}>3</button>
      <button type="submit" className="math-operands" onClick={() => updateCalc('+')}>+</button>
      <button type="submit" className="span-two" onClick={() => updateCalc('0')}>0</button>
      <button type="submit" onClick={() => updateCalc('.')}>.</button>
      <button type="submit" className="math-operands">=</button>
    </div>
  );
}
// }
export default CalculatorApp;
