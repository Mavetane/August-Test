import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './containers/Register';
import Todo from './containers/Todo';
import Timer from './containers/Timer'


class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Productivity App</h2>
        </div>
        <Register />
        {/* <Todo /> */}
        <Timer />

      </div>
    );
  }
}

export default App;
