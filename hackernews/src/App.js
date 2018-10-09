import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: '',
    author: '',
    num_comments: 0,
    points: 0,
    objectID: 0,
  }
]

class App extends Component {
  render() {
    var myName = {
      first: 'Gareth',
      last: 'Perkins'
    }
    return (
      <div className="App">
        <h2>Hi there, Mr {myName.first} {myName.last}</h2>
      </div>
    );
  }
}

export default App;
