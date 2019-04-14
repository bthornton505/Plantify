import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authActions';

class Navigation extends Component {

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    const guestNav = (
      <>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/">
          Home
        </NavLink>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/about">
          About
        </NavLink>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/login">
          Login
        </NavLink>
      </>
    )

    const userNav = (
      <>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/user_profile">
          Profile
        </NavLink>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/my_recipes">
          My Recipes
        </NavLink>
        <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/about">
          About
        </NavLink>
        <NavLink onClick={this.handleLogout} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/">
          Log Out
        </NavLink>
      </>
    )

    return(
      <header className="bg-white black-80 tc pv4 avenir">
        <h1 className="mt2 mb0 baskerville i fw1 f1">Plantify</h1>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">Plantify your life!</h2>
        <nav className="bt bb tc mw7 center mt4">
          {this.props.isAuthenticated ? userNav : guestNav}
        </nav>
      </header>
    )
  }
}


export default connect(null, { logout })(Navigation)
