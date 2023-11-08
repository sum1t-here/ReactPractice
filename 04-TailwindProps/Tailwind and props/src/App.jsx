import './App.css';
import Card from './components/Card.jsx';

function App() {
  // let myObj = {
  //   username: 'Sumit',
  //   age: '21',
  // };
  // let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      {/* <Card someObj={myObj} />
      <Card someObj={newArr} /> */}
      <Card username='asdfghj' btnText='hi' />
      <Card />
    </>
  );
}

export default App;
