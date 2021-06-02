import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable.jsx";
import EmployeeForm from "./EmployeeForm.jsx";
import { HashRouter as Router, Route } from "react-router-dom";
import { RouterConstants } from "../../router/RouterConstants";
import {registration} from "../../services/UserService";


class Employee extends Component {
  state = {
    table: true,
    EmpInfo: {},
    EmpInfoBool: false,
  };

  render() {

    return (
      <Router>
        <Route
          exact
          path={RouterConstants.users}
          render={props =>
            <React.Fragment>
              {this.state.table ? (
                    <EmployeeTable
                      onAddEmployee={this.handleAddEmployee}
                      onEmpInfo={this.handleEmpInfo}
                    />
              ) : (
                  <EmployeeForm
                    onEmployeeSubmit={this.handleEmployeeSubmit}
                    onFormClose={this.handleFormClose}
                  />
                )}
            </React.Fragment>
          }
        />

      </Router>
    );
  }

  handleEmpInfo = e => {
    this.setState({ EmpInfo: e });
    this.setState({ EmpInfoBool: true })
  };

  handleEmployeeSubmit = event => {
    event.preventDefault();
    this.setState({ table: true });

    let body = {
      FirstName: event.target[0].value,
      LastName: event.target[1].value,
      Username: event.target[2].value,
      Email: event.target[3].value,
      Password: event.target[4].value,
      Role: event.target[5].value,
    };

    registration(body.Username, body.Password, body.FirstName, body.LastName, body.Email, body.Role)
    .then(res => {
      this.setState({ table: false });
      this.setState({ table: true });
    }).catch(err => {
      console.log(err);
    });
  };

  handleAddEmployee = () => {
    this.setState({ table: false });
  };
  
  handleFormClose = () => {
    this.setState({ table: true });
  };
}

export default Employee;

