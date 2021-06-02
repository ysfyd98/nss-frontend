import React from "react";
import {Alert} from "react-bootstrap";
import {registration} from "../../services/UserService";
import {RouterConstants} from "../../router/RouterConstants";
import Dropdown from "react-bootstrap/Dropdown";
import {Link} from "react-router-dom";
import {NavLink} from "react-bootstrap";


const ROLES = [
    {label : "Manager", value : "MANAGER"},
    {label : "Worker", value: "WORKER"}
]

export default class RegistrationPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstName : "",
            lastName : "",
            username : "",
            password : "",
            email : "",
            role : "",

            firstNameValid:false,
            formErrors: {firstName: ''},

            error : undefined
        }
    }

    _onUsernameInput = (e) => {
        this.setState({username : e.target.value})
    }

    _onPasswordInput = (e) => {
        this.setState({password : e.target.value})
    }

    _onFirstNameInput = (e) => {
        this.setState({firstName : e.target.value})
    }

    _onLastNameInput = (e) => {
        this.setState({lastName : e.target.value})
    }

    _onEmailInput = (e) => {
        this.setState({email : e.target.value})
    }


    _onSubmit = (e) => {
        let {username, password, firstName, lastName, email, role} = this.state
        registration(username, password, firstName, lastName, email, role).then(resp => {
            window.location.href=RouterConstants.login
        }).catch(error => {
            this.setState({error : error.message})
        })
    }


    render() {

        let alert = "";
        if (this.state.error !== undefined) {
            alert = <Alert variant={"warning"}>Please, complete the form.</Alert>
        }
        return (
            <main>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-3 offset-md-5">
                            <h4 className="text-center mb-3"> Registration</h4>
                            {alert}
                            <div className="mb-3">
                                
                                <input type="text"
                                       required
                                       className="form-control"
                                       value={this.state.firstName}
                                       placeholder="First name"
                                       onChange={this._onFirstNameInput}/>
                            </div>

                            <div className="mb-3">
                                <input type="text"
                                required
                                       className="form-control"
                                       value={this.state.lastName}
                                       placeholder="Last name"
                                       onChange={this._onLastNameInput}/>
                            </div>

                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.username}
                                       placeholder="Username"
                                       onChange={this._onUsernameInput}/>
                            </div>

                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.email}
                                       placeholder="Email"
                                       onChange={this._onEmailInput}/>
                            </div>

                            <div className="mb-3">
                                <input type="password"
                                       className="form-control"
                                       value={this.state.password}
                                       placeholder="Password"
                                       onChange={this._onPasswordInput}/>
                            </div>

                            <div className="mb-3">
                          
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark"  className="form-control">
                                        {this.state.role ? this.state.role : "Choose role"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {ROLES.map(role => {
                                            return <Dropdown.Item onClick={e => this.setState({role : role.value})}>{role.label}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <button className="btn btn-success btn-lg btn-block focus"
                                    type="submit"
                                    onClick={this._onSubmit}
                                    onInput={this._onSubmit}>Submit
                            </button>
                            <div>
                                <NavLink className="text-center">
                                    <Link to={RouterConstants.login}>Sign in</Link>
                                </NavLink>
                            </div> 
                        </div>
                        
                    </div>
                       
                </div>
            </main>
        )
    }
}
