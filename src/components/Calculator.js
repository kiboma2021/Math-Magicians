import React, { useState } from 'react';
import '../styles.css';
import calculate from '../logic/calculate';

const CalculatorApp = () => {
  const [calc, setCalculation] = useState({ total: null, next: null });

  const mathOperation = (symbol) => {
    setCalculation(calculate(calc, symbol));
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="my-operand">{calc.next ?? calc.total ?? 0}</div>
      </div>
      <button type="submit" onClick={() => mathOperation('AC')}>AC</button>
      <button type="submit" onClick={() => mathOperation('+/-')}>+/-</button>
      <button type="submit" onClick={() => mathOperation('%')}>%</button>
      <button type="submit" onClick={() => mathOperation('÷')} className="math-operands">÷</button>
      <button type="submit" onClick={() => mathOperation('7')}>7</button>
      <button type="submit" onClick={() => mathOperation('8')}>8</button>
      <button type="submit" onClick={() => mathOperation('9')}>9</button>
      <button type="submit" onClick={() => mathOperation('x')} className="math-operands">x</button>
      <button type="submit" onClick={() => mathOperation('4')}>4</button>
      <button type="submit" onClick={() => mathOperation('5')}>5</button>
      <button type="submit" onClick={() => mathOperation('6')}>6</button>
      <button type="submit" onClick={() => mathOperation('-')} className="math-operands">-</button>
      <button type="submit" onClick={() => mathOperation('1')}>1</button>
      <button type="submit" onClick={() => mathOperation('2')}>2</button>
      <button type="submit" onClick={() => mathOperation('3')}>3</button>
      <button type="submit" onClick={() => mathOperation('+')} className="math-operands">+</button>
      <button type="submit" onClick={() => mathOperation('0')} className="span-two">0</button>
      <button type="submit" onClick={() => mathOperation('.')}>.</button>
      <button type="submit" onClick={() => mathOperation('=')} className="math-operands">=</button>
    </div>
  );
};

export default CalculatorApp;
