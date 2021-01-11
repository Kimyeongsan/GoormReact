import React from 'react';       // 4강 add
import logo from './logo.svg';
import './App.css';
import Comment from './Comment'; // 4강 add

const comentsFromServer = [
  { name: 'Kim San', content: 'My comment1' },
  { name: 'Lee San', content: '한글 만세!' },
  { name: 'Pack San', content: 'My comment3' }
];

var timer;


class App extends React.Component {
  constructor(props) {
    super(props);

    // 5강 add : state
    this.state = {
      comments: [],
    };
  }

  // 1초마다 하나씩 index 출력
  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length < comentsFromServer.length) {
        let index = comments.length;
        comments.push(comentsFromServer[index]);
        this.setState({
          comments : comments
        });
      } else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="App" style={{ padding: 16, backgroundColor: '#282c34' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <div>
          {comments.map((comment, index) => {
            return (
              <Comment
                name={comment.name}
                content={comment.content} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
