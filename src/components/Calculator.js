import '../styles.css';

function CalculatorApp() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">0</div>
        <div className="current-operand" />
      </div>
      <button type="submit">AC</button>
      <button type="submit">+/-</button>
      <button type="submit">%</button>
      <button type="submit" className="math-operands">/</button>
      <button type="submit">7</button>
      <button type="submit">8</button>
      <button type="submit">9</button>
      <button type="submit" className="math-operands">X</button>
      <button type="submit">4</button>
      <button type="submit">5</button>
      <button type="submit">6</button>
      <button type="submit" className="math-operands">-</button>
      <button type="submit">1</button>
      <button type="submit">2</button>
      <button type="submit">3</button>
      <button type="submit" className="math-operands">+</button>
      <button type="submit" className="span-two">0</button>
      <button type="submit">.</button>
      <button type="submit" className="math-operands">=</button>
    </div>
  );
}
export default CalculatorApp;
