import './App.css';

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">pre</div>
        <div className="current-operand">cur</div>
      </div>
      <button type="submit" className="span-two">AC</button>
      <button type="submit">DEL</button>
      <button type="submit">+</button>
      <button type="submit">1</button>
      <button type="submit">2</button>
      <button type="submit">3</button>
      <button type="submit">*</button>
      <button type="submit">4</button>
      <button type="submit">5</button>
      <button type="submit">6</button>
      <button type="submit">+</button>
      <button type="submit">7</button>
      <button type="submit">8</button>
      <button type="submit">9</button>
      <button type="submit">-</button>
      <button type="submit">.</button>
      <button type="submit">0</button>
      <button type="submit" className="span-two">=</button>
    </div>
  );
}
export default App;
