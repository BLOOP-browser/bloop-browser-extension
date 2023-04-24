import http from "./http";
import {CurrentUser, LoginUser} from "../models/user";

const signIn = (email: string, password: string) => {
  return http.post<LoginUser>(`/auth/login`, {email: email, password: password})
}

const getProfile = () => {
  return http.get<CurrentUser>(`/profile`, {  headers: {
    "Content-type": "application/json",
    "Accept": "/",
    "Authorization" : `Bearer ${localStorage.getItem("auth")}`
  },});
}


const AuthService = {
  getProfile,
  signIn
}

export default AuthService;
