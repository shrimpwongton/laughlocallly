import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
// import ComedianDash from '../containers/ComedianDash.jsx'

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="Navigation">
        <nav className="navbar navbar-default navbar-fixed-top ">
          <div className="navbar-header">
            <a className="navbar-brand navbar-left" href="/"> Laugh Local.ly </a>
          </div>
          <div className="container-fluid navbar-right">
            <ul className="nav navbar-nav">
              <li> <Link to="/comedianprofiles"> Book a Comedian </Link> </li>   
              <li> <Link to="/login"> Log In </Link> </li>      
              <li> <Link to="/signup"> Sign Up </Link> </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navigation; 