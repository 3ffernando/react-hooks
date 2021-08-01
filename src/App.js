import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncremment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter} </h1>
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
        <button type="button" onClick={handleIncremment}>
          Incremment
        </button>
      </header>
    </div>
  );
}

export default App;
