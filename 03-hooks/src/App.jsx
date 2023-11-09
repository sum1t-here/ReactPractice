import { useState } from 'react';
import './App.css';

function App() {
  //      variable, function
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    console.log('Clicked', counter);
    // setCounter(counter + 1);

    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hi, this is a counter project</h1>
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
