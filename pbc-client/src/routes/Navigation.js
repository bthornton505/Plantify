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
    const { user } = this.props
    const guestNav = (
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    )

    const userNav = (
      <ul>
        <li><Link to="/user/:username">Profile</Link></li>
        <li><Link to="/my_recipes">My Recipes</Link></li>
        <li onClick={() => this.handleLogout()}>Log Out</li>
      </ul>
    )

    return(
      <header>
        <nav>
          {this.props.isAuthenticated ? userNav : guestNav}
        </nav>
      </header>
    )
  }
}


export default Navigation = withRouter(connect(null, { logout })(Navigation))
