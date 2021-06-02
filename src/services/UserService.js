import {Api} from "../api/Api";
import {RouterConstants} from "../router/RouterConstants";


const TOKEN_STORAGE_KEY = "login_token"
const USER_NAME = "user_name"
const LOGIN_API = "/accounts/login"
const REGISTER_API = "/accounts/add"
const CURRENT_USER_API = "/accounts/current"
const ALL_ACCOUNTS = "/accounts"


export const isLoggedIn = () => {
    return sessionStorage.getItem(TOKEN_STORAGE_KEY) !== null;
}

export const getToken = () => {
    return sessionStorage.getItem(TOKEN_STORAGE_KEY)
}

export const getUserName = () => {
    return sessionStorage.getItem(USER_NAME)
}

export async function getUserInfo() {
    let resp = await Api.get(CURRENT_USER_API);
    let data = resp.data;
    return data;
}

export async function getAllAccounts() {
    let resp = await Api.get(ALL_ACCOUNTS);
    let data = resp.data;
    return data;
}

export async function logIn(username, password){
    let request = {
    username : username,
    password : password
    }

    let resp = await Api.post(LOGIN_API, request);
    let data = resp.data;
    sessionStorage.setItem(TOKEN_STORAGE_KEY, data.token);

    let resp2 = await Api.get(CURRENT_USER_API);
    let data2 = resp2.data;
    sessionStorage.setItem(USER_NAME, data2.username);
}

export function logOut() {
    sessionStorage.clear();
    window.location.href=RouterConstants.login
}

export async function userIsManager(){
    let resp = await Api.get(CURRENT_USER_API);
    let data = resp.data;
    return data.role == "MANAGER"
}

export async function registration(username, password, firstName, lastName, email, role) {
    let request = {
        firstName : firstName,
        lastName : lastName,
        username : username,
        email : email,
        password : password,
        role : role
    }

    let resp = await Api.post(REGISTER_API, request);
    let data = await resp.data;
}