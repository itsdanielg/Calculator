import { useState } from 'react';
import '../styles/App.css';

function App() {

  const [output, setOutput] = useState(() => {
    return 0;
  })

  return (
    <div className="App">
      <div className="calculator">
        <div className="output">
          <h1>{output}</h1>
        </div>
        <div className="buttons">
          <button className="symbols">AC</button>
          <button className="symbols">+/-</button>
          <button className="symbols">%</button>
          <button className="operations">/</button>
          <button className="numbers">7</button>
          <button className="numbers">8</button>
          <button className="numbers">9</button>
          <button className="operations">x</button>
          <button className="numbers">4</button>
          <button className="numbers">5</button>
          <button className="numbers">6</button>
          <button className="operations">-</button>
          <button className="numbers">1</button>
          <button className="numbers">2</button>
          <button className="numbers">3</button>
          <button className="operations">+</button>
          <button className="numbers zero">0</button>
          <button className="numbers">.</button>
          <button className="operations">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
