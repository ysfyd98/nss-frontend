import React from "react";
import {Alert, NavLink} from "react-bootstrap";
import {RouterConstants} from "../../router/RouterConstants";
import {Link} from "react-router-dom";
import {logIn, userIsManager} from "../../services/UserService";

export default class LoginPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username : "",
            password : "",
            error : undefined
        }
    }

    _onUsernameInput = (e) => {
        this.setState({username : e.target.value})
    }

    _onPasswordInput = (e) => {
        this.setState({password : e.target.value})
    }

    _onSubmit = (e) => {
        logIn(this.state.username, this.state.password).then(resp => {
            userIsManager().then(resp => {
                resp ? window.location.href=RouterConstants.managerDashboard : window.location.href=RouterConstants.workerDashboard
            })
        }).catch(error => {
            this.setState({error : error})
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
                            <div className="col-md-3 offset-md-6">
                                <h4 className="text-center mb-3">Sign In</h4>
                                {alert}
                                <div className="mb-3">
                                    <input type="text"
                                           className="form-control"
                                           value={this.state.username}
                                           onChange={this._onUsernameInput}/>
                                </div>
                                <div className="mb-3">
                                    <input type="password"
                                           className="form-control"
                                           value={this.state.password}
                                           onChange={this._onPasswordInput}/>
                                </div>
                                <button className="btn btn-success btn-lg btn-block focus"
                                        type="submit"
                                        onClick={this._onSubmit}
                                        onInput={this._onSubmit}>Login</button>

                                <div>
                                    <NavLink className="text-center">
                                        <Link to={RouterConstants.registration}>Registration</Link>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        )
    }
}
