import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Navigation from './routes/Navigation'
import MyRecipes from './containers/recipes/MyRecipes';
import RecipeForm from './components/recipes/RecipeForm';
import Recipe from './components/recipes/Recipe'
import LandingPage from './components/LandingPage';
import UserProfile from './containers/users/UserProfile'
import { checkToken } from './actions/authActions';

import './App.css';

class App extends Component {

  componentWillMount = () => {
    if (localStorage.getItem("auth_token")) {
      this.props.checkToken(localStorage.getItem("auth_token"))
    } else if (!window.location.href.includes('login') && !window.location.href.includes('signup') && !(window.location.pathname === '/')) {
      localStorage.clear()
      window.location.href = "/login"
    }
  }

  render() {
    console.log("App is loading")
    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div>
      <h1>Plant Based Chef</h1>
        <Navigation isAuthenticated={isAuthenticated}/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    )

    const userViews = (
      <div>
        <h1>Plant Based Chef</h1>
        <Navigation isAuthenticated={isAuthenticated} user={user}/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user/:username" render={() => <UserProfile user={user} />} />
        <Route exact path="/my_recipes" render={() => <MyRecipes user={user} />} />
        <Route exact path="/new_recipe" render={() => <RecipeForm user={user} />} />
        <Route exact path="/recipe/:id" component={Recipe} />
      </div>
    )
    console.log(isAuthenticated)

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
    user: state.auth.currentUser,
    // recipes: state.auth.currentUser.recipes
  }
}

export default connect(mapStateToProps, { checkToken })(App);

// <p><Link to={{ pathname: `/user/${user.username}`}}>Profile</Link><br></br><Link to="/my_recipes">My Recipes</Link></p>
