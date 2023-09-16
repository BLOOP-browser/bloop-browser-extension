import http from "./http";
import UserData, { CreateUser, CurrentUser, FollowData, LoginUser } from "../models/user";

const createUser = (userData: CreateUser) => {
  return http.post<UserData>(
    `/user`,
    userData,
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

const getCurrentUser = () => {
  return http.get<CurrentUser>(
    `/user/current`,
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

const getFollowData = (userId: number) => {
  return http.get<FollowData>(
    `/user/${userId}/follow`,
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

const loginUser = (email: string, password: string) => {
  return http.post<LoginUser>(
    `/user/login`,
    { email, password },
    {
      headers: {
        "Content-type": "application/json",
        Accept: "/",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    }
  );
};

// Add more service methods here as required...

const UserService = {
  createUser,
  getCurrentUser,
  getFollowData,
  loginUser,
  // ... other methods ...
};

export default UserService;
