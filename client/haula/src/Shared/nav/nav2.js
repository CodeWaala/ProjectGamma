import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './nav.css';//

// export const Nav = () => (
//   <nav className="navbar navbar-inverse navbar-top">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="collapsed navbar-toggle">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" /> <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>
//         <div className="row box-1">
//         <a href="/" className="navbar-brand">
//           Haula
//         </a>
//         <a href="/link" className="navbar-brand">
//         Customer
//         </a>
//         <a href="/mover" className="navbar-brand">
//         Mover
//         </a>
//         </div> 
//       </div>
//     </div>
//   </nav>
// );

export const MyNavbar = () =>{
    return(
<Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
          <NavLink exact activeClassName='active' to='/'>
              Haula
          </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} >
          <NavLink activeClassName='active' to='/SignUp' className='signButton'>
            Sign up
          </NavLink>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <NavLink activeClassName='active' to='/Login' className='loginButton'>
            Login
          </NavLink>
      </NavItem>
      <NavItem eventKey={3} href="#">
          <NavLink activeClassName='active' to='/Help' className='helpButton'>
            Help
          </NavLink>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)}
