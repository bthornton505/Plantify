import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Plant Based Chef
          <LoginForm />
        </header>
      </div>
    );
  }
}

export default App;
