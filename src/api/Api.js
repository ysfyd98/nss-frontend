import axios from "axios";
import {getToken} from "../services/UserService";

const HOSTNAME = "http://localhost:8081/shiftScheduler"

export const Api = axios.create({
baseURL : HOSTNAME,
responseType : "json",
headers : {
'Content-Type': 'application/json',
'Access-Control-Allow-Origin':'*',
}
})

Api.interceptors.request.use(config => {
let token = getToken();
if (token !== null) {
config.headers.Authorization = "Bearer " + token;
}
return config;
})