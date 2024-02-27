import { useState } from 'react'
import './App.css'


function App() {
  const [display, setDisplay] = useState('');

  const clear = () => {

    setDisplay('');
  };

  const appendToDisplay = (input) => {
    setDisplay((prevDisplay) => prevDisplay + input);
  };

  const result = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch(error) {
      setDisplay('ERROR');
    }
  };


  return (
    <>
      <div className="calculator">
        <input 
        id='display' 
        readOnly
        value={display}
        onChange={(e) => setDisplay(e.target.value)}/>
        <div className="keys">
          <button className='action' onClick={clear}>AC</button>
          <button  onClick={() => appendToDisplay('7')}>7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
          <button className='action' onClick={() => appendToDisplay('/')}>/</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button className='action' onClick={() => appendToDisplay('*')}>X</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button className='action' onClick={() => appendToDisplay('-')}>-</button>
          <button className='action' onClick={() => appendToDisplay('+')}>+</button>
          <button className='action' onClick={result}>=</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
          
        </div>
      </div>
    </>
  )
}

export default App
