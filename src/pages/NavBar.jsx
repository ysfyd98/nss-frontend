import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/ss.png";
import Switch from "react-switch";
import {getUserName, logOut} from "../services/UserService";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="nav-bar" fixed="top"  id="main-nav">
          <Navbar.Brand id="logo-anchor">
          <div id="logo-img-div"><img id ="nav-bar-logo"src={Logo} alt="" /></div>
          <div id="app-name"><a>Shift Scheduler</a></div>
          
          <span id="toggle-switch">
            <Switch 
            checked={this.props.checked}
            onChange={this.props.handleChange}
            onColor="#404e67"
            onHandleColor="#ffffff"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={30}
            width={55}
            className="react-switch"
            id="material-switch"/>
          </span>
          </Navbar.Brand>
              
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="logout-navbar-nav">
            <Nav className="ml-auto">
              <a onClick="" className="navbar-right-content"> {getUserName()} </a>
              <a onClick={logOut} style={{"cursor":"pointer"}} className="navbar-right-content">Log Out</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
