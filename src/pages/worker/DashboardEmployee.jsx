import React, { Component } from "react";
import "./DashboardEmployee.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import NavBar from "../NavBar";
import PersonalInfoTable from "./PersonalInfoTable.jsx";
import BigLogoImage from "../BigLogoImage";
import {RouterConstants} from "../../router/RouterConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUser } from "@fortawesome/free-solid-svg-icons";


class DashboardEmployee extends Component {

  state = {
    redirect: true,
    checked: true 
  };

  handleChange=(checked)=> {
    if(this.state.checked==true){ 
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>

        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar
              loginInfo={this.props.data}
              checked={this.state.checked}
              handleChange={this.handleChange}
              onLogout={this.props.onLogout}
            />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title" className="main-title-employee">
                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                Employee
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to={RouterConstants.workerInformation}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="sidebar-icon"
                    />
                    Personal Information
                  </Link>
                </li>
              </ul>
            </div>
            <div id="main-area">
              <div id="sidebar-top-content" />
              <Switch>
                <Route
                  exact
                  path="/personal-info"
                  render={props => <PersonalInfoTable data={this.props.data} back={false} />}
                />
                <Route
                  render={
                    () => <BigLogoImage/>
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardEmployee;
