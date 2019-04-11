import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Navigation from './routes/Navigation'
import MyRecipes from './containers/recipes/MyRecipes';
import RecipeForm from './components/recipes/RecipeForm';
import Recipe from './components/recipes/Recipe'
import About from './components/About';
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
        <Navigation isAuthenticated={isAuthenticated}/>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </div>
    )

    const userViews = (
      <div>
        <Navigation isAuthenticated={isAuthenticated}/>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user_profile" render={() => <UserProfile user={user} />} />
          <Route exact path="/my_recipes" render={() => <MyRecipes user={user} />} />
          <Route exact path="/new_recipe" render={() => <RecipeForm user={user} />} />
          <Route exact path="/recipe/:id" component={Recipe} />
        </Switch>

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
