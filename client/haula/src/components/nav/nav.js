const React = require('react');
//Link to Router...
// import AppBar from 'material-ui/AppBar';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { green500 } from 'material-ui/styles/colors';
const NavLink = require('react-router-dom').NavLink;



function Nav () {
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

module.exports = Nav;