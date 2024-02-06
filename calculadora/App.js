import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [display, setDisplay] = useState('');
  
  const addToDisplay = value => {
    setDisplay(prevDisplay => prevDisplay + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button className="number" onClick={() => addToDisplay('7')}>7</button>
        <button className="number" onClick={() => addToDisplay('8')}>8</button>
        <button className="number" onClick={() => addToDisplay('9')}>9</button>
        <button className="operator" onClick={() => addToDisplay('/')}>/</button>
        <button className="number" onClick={() => addToDisplay('4')}>4</button>
        <button className="number" onClick={() => addToDisplay('5')}>5</button>
        <button className="number" onClick={() => addToDisplay('6')}>6</button>
        <button className="operator" onClick={() => addToDisplay('*')}>*</button>
        <button className="number" onClick={() => addToDisplay('1')}>1</button>
        <button className="number" onClick={() => addToDisplay('2')}>2</button>
        <button className="number" onClick={() => addToDisplay('3')}>3</button>
        <button className="operator" onClick={() => addToDisplay('-')}>-</button>
        <button className="number" onClick={() => addToDisplay('0')}>0</button>
        <button className="decimal" onClick={() => addToDisplay('.')}>.</button>
        <button className="equals" onClick={() => calculateResult()}>=</button>
        <button className="operator" onClick={() => addToDisplay('+')}>+</button>
        <button className="clear" onClick={() => clearDisplay()}>C</button>
      </div>
    </div>
  );
}

export default App;
