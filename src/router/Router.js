import {BrowserRouter} from "react-router-dom";
import React from "react";
import {isLoggedIn} from "../services/UserService";
import {RouterConstants} from "./RouterConstants";
import LoginPage from "../pages/loginpage/LoginPage";
import RegistrationPage from "../pages/registrationpage/RegistrationPage";
import { Redirect } from "react-router-dom";
import {Route} from "react-router";
import DashboardManager from "../pages/manager/DashboardManager";
import DashboardEmployee from "../pages/worker/DashboardEmployee";

const ProtectedRoute = () => {
    if (!isLoggedIn()) {
        return <Redirect to={RouterConstants.login}/>
    }
    return [
        <Route path={RouterConstants.managerDashboard} exact={true} component={DashboardManager}/>,
        <Route path={RouterConstants.workerDashboard} exact={true} component={DashboardEmployee}/>
    ]
}

export default function Router(props) {
    return <BrowserRouter>
        <ProtectedRoute/>
        <Route path={RouterConstants.login} exact={true} component={LoginPage}/>
        <Route path={RouterConstants.registration} exact={true} component={RegistrationPage}/>
    </BrowserRouter>
}
