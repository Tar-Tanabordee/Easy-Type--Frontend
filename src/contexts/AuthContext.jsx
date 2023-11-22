import { createContext, useState } from "react";
import {
  addAccessToken,
  removeAccessToken,
  // createAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState({});
  // const [authAdmin, setAuthAdmin] = useState(null);
  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };
  const register = async (registerdata) => {
    const res = await axios.post("/auth/register", registerdata);
    console.log(res, "res");
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };
  // const adminRegister = async (registerData) => {
  //   await axios.post("/auth/admin/register", registerData);
  // };

  // const adminLogin = async (data) => {
  //   const getAdmin = await axios.post("/auth/admin/login", data);
  //   createAccessToken(getAdmin.data.accessToken);
  //   setAuthAdmin(getAdmin.data.admin);
  // };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    // setAuthAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        register,
        logout,
        // adminRegister,
        // adminLogin,
        // authAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
