import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import UserProfile from './containers/users/UserProfile'
import './App.css';

class App extends Component {

  render() {

    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div>
        <h1>Plant Based Chef</h1>
        <Route exact path="/signup" component={Signup} />
      </div>
    )

    const userViews = (
      <div>
        <h1>Plant Based Chef</h1>
        <Route exact path="/user_profile" render={() => <UserProfile user={user}/>} />
      </div>
    )

    return (
      <Router>
        {isAuthenticated ? userViews : guestViews}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(App);
