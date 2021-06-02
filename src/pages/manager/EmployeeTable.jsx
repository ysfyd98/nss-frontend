import React, { Component } from "react";
import "./EmployeeTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";
import { Button } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Link } from "react-router-dom";
import { getAllAccounts } from "../../services/UserService";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;


class AdminEmployeeTable extends Component {
  state = {
    employeeData: [],
    loading: true,

    columnDefs: [
      {
        headerName: "First Name",
        field: "FirstName",
        sortable: true,
        width: 300,
      },
      {
        headerName: "Last Name",
        field: "LastName",
        sortable: true,
        width: 300,
      },
      {
        headerName: "Username",
        field: "Username",
        sortable: true,
        width: 300,
      },
      {
        headerName: "Email",
        field: "Email",
        sortable: true,
        width: 300,
      },
      {
        headerName: "Role",
        field: "Role",
        sortable: true,
        width: 300,
      },
    ],

    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 100,
      filter: "agTextColumnFilter"
    },
    getRowHeight: function (params) {
      return 85;
    }
  };
  
  employeeObj = [];
  rowDataT = [];

  loadEmployeeData = () => {
    getAllAccounts()
      .then(response => {
        this.employeeObj = response;
        this.setState({ employeeData: response });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.employeeObj.map(data => {
          let temp = {
            data,
            Email: data["email"],
            Username: data["username"],
            Role: data["role"],
            FirstName: data["firstName"],
            LastName: data["lastName"],
          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadEmployeeData();
  }

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">Employee Details</h2>

        <Link to="">
          <Button variant="primary" id="add-button"> Back </Button>
        </Link>

        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddEmployee}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>

        <div id="clear-both" />
        {!this.state.loading ? (
          <div
            id="employee-table-div"
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              pagination={true}
              paginationPageSize={7}
              getRowHeight={this.state.getRowHeight}
            />
          </div>
        ) : (
            <div id="loading-bar">
              <RingLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#0000ff"}
                loading={true}
              />
            </div>
          )}

      </div>
    );
  }
}

export default AdminEmployeeTable;
