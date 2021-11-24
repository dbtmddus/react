import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let title = ["title1", "title2", "title3" ]
  let [like, likehandler] = useState(0)

  return (
    <div className="App">
        <div className="list">
          <h3>
             {title[0]}
             <span onClick = { ()=> likehandler(like+1) }> ★ </span> {like}
          </h3>
          <p> "11월 1일" </p>
          <hr/>
        </div>
        <div className="list">
          <h3> {title[1]}  </h3>
          <p> "11월 2일" </p>
        </div>
        <div className="list">
          <h3> {title[2]}  </h3>
          <p> "11월 3일" </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
