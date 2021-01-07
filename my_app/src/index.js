import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// JS code
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// JSX code
// 2강 강의 내용

const formatName = function(name) {
  return name.firstName + " " + name.SecondName;
}

const name = {
  firstName : "Kim",
  SecondName : "San",
};

const element = <h1>Hello, {formatName(name)}!</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
