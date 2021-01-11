import React from 'react';       // 4강 add
import logo from './logo.svg';
import './App.css';
import Comment from './Comment'; // 4강 add

const comments = [
  { name : 'Kim San', content : 'My comment1'},
  { name : 'Lee San', content : 'My comment2'},
  { name : 'Pack San', content : 'My comment3'},
];


function App() {
  return (
    <div className="App" style={{padding:16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comments.map((comment, index) => {
          return (
            <Comment
              name = {comment.name}
              content = {comment.content}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
