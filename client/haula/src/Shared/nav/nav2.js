import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
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
      <a href="#brand">Haula</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Sign Up
      </NavItem>
      <NavItem eventKey={2} href="#">
        Log In
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)}
