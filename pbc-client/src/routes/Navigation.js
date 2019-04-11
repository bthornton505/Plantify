import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter} from 'react-router-dom'
import { logout } from '../actions/authActions';

class Navigation extends Component {

  handleLogout = () => {
    this.props.logout()
    localStorage.clear()
    this.props.history.push('/login')
  }

  render() {
    const guestNav = (
      <nav className="bt bb tc mw7 center mt4">
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/">
          About
        </Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/signup">
          Sign Up
        </Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/login">
          Login
        </Link>
        <Link onClick={this.handleLogout} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/">
          Log Out
        </Link>
      </nav>
    )

    const userNav = (
      <nav className="bt bb tc mw7 center mt4">
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/user_profile">
          Profile
        </Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/my_recipes">
          My Recipes
        </Link>
        <Link onClick={this.handleLogout} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/">
          Log Out
        </Link>
      </nav>
    )

    return(
      <header className="bg-white black-80 tc pv4 avenir">
        <h1 className="mt2 mb0 baskerville i fw1 f1">Plantify</h1>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">Plantify your life!</h2>
        {this.props.isAuthenticted ? userNav : guestNav}
      </header>
    )
  }
}


export default Navigation = withRouter(connect(null, { logout })(Navigation))
