import { useState } from 'react';
import NumberButton from './Button/NumberButton';
import OperationButton from './Button/OperationButton';
import SymbolButton from './Button/SymbolButton';
import '../styles/App.css';

function App() {

  const [output, setOutput] = useState(() => {
    return "0";
  })

  const [internal, setInternal] = useState(() => {
    return 0;
  })

  return (
    <div className="App">
      <div className="calculator">
        <div className="output">
          <h1>{output}</h1>
        </div>
        <div className="buttons">
          <SymbolButton input="AC" output={output} setOutput={setOutput} internal={internal} setInternal={setInternal}/>
          <SymbolButton input="+/-" output={output} setOutput={setOutput} internal={internal} setInternal={setInternal}/>
          <SymbolButton input="%" output={output} setOutput={setOutput} internal={internal} setInternal={setInternal}/>
          <OperationButton input="/" setOutput={setOutput}/>
          <NumberButton input="7" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="8" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="9" prevOutput={output} setOutput={setOutput}/>
          <OperationButton input="x" setOutput={setOutput}/>
          <NumberButton input="4" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="5" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="6" prevOutput={output} setOutput={setOutput}/>
          <OperationButton input="-" setOutput={setOutput}/>
          <NumberButton input="1" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="2" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="3" prevOutput={output} setOutput={setOutput}/>
          <OperationButton input="+" setOutput={setOutput}/>
          <NumberButton input="0" prevOutput={output} setOutput={setOutput}/>
          <NumberButton input="." prevOutput={output} setOutput={setOutput}/>
          <OperationButton input="=" setOutput={setOutput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
