import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home//This is for the title Logo
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/SignUp'>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/Login'>
            Login
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default Nav;