import React, { Component } from 'react';
import SignupForm from './components/SignupForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Plant Based Chef</h1>
          <SignupForm />
        </header>
      </div>
    );
  }
}

export default App;
