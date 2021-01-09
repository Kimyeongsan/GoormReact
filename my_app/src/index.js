import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// JS code
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// JSX code
// 2강 강의 내용
// const formatName = function(name) {
//   return name.firstName + " " + name.SecondName;
// }

// const name = {
//   firstName : "Kim",
//   SecondName : "San",
// };

// const element = <h1>Hello, {formatName(name)}!</h1>

// 3강 강의 내용
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Data().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root'));
}

setInterval(tick, 1000);

serviceWorker.unregister();