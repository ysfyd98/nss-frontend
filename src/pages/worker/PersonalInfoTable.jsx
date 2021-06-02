import React, { Component } from "react";
import "./PersonalInfoTable.css";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {getUserInfo} from "../../services/UserService";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class PersonalInfoTable extends Component {
  state = {
    personalInfoData: [],
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
      return 100;
    }
    
  };
  personalInfoObj = [];
  rowDataT = [];

  loadPersonalInfoData = () => {
    getUserInfo().then(response => {
        this.personalInfoObj = response;
        this.setState({ personalInfoData: response });
        this.setState({ loading: false });
        this.rowDataT = [];
        let data = this.personalInfoObj;
        let temp = {
          data,
          FirstName: data["firstName"] || "Not Avaiable",
          LastName: data["lastName"] || "Not Avaiable",
          Username: data["username"] || "Not Avaiable",
          Email: data["email"] || "Not Avaiable",
          Role: data["role"] || "Not Avaiable",
        };

        this.rowDataT.push(temp);
        this.setState({ rowData: this.rowDataT });

      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadPersonalInfoData();
  }

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">Employee Personal Details</h2>
        <Link to="">
          <Button variant="primary" id="add-button"> Back </Button>
        </Link>


        {!this.state.loading ? (
          <div
            id="personal-info-table-div"
            className="ag-theme-balham">
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              pagination={false}
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

export default PersonalInfoTable;
