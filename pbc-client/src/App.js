import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer';
import './App.css';

class App extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Plant Based Chef
          <LoginContainer />
        </header>
      </div>
    );
  }
}

export default App;
