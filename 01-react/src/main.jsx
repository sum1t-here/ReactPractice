import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function MyApp() {
  return (
    <div>
      <h1>Testing different things.</h1>
    </div>
  );
}

// Syntax is wrong to be executed
// Define a React-like element (reactElement) with a type 'a' (anchor) and props (attributes) for href and target.
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google', // Inner content of the anchor element.
// };

const anotherElement = (
  <a href='https://google.com' target='_blank' rel='noreferrer'>
    Visit google
  </a>
);

const anotherUser = 'Sumit';

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp />
  // MyApp()
  // <App />
  // anotherElement
  reactElement
);
