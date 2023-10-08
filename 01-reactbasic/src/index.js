import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const anotherUser = 'Sumit';

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

  // reactElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
