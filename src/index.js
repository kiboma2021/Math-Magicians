import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculatorApp from './components/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>,
);

reportWebVitals();
