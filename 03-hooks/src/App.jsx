import { useState } from 'react';
import './App.css';

function App() {
  //      variable, function
  let [counter, setCounter] = useState(0);

  // let counter = 15;
  const maxLimit = 5;

  const addValue = () => {
    if (counter < maxLimit) {
      setCounter(counter + 1);
    }
    console.log('MAX reached');
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter within limits</h1>
      <h2>Counter value: {counter}</h2>
      {/* reference of addValue is passed */}
      <button onClick={addValue}>Add Value</button>

      <br />
      <br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
