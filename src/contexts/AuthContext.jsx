import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(getAccessToken());
  const [allAddress, setAllAddress] = useState([]);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/auth/me").then((res) => setAuthUser(res.data.user));
      getAllAddress();
    }
  }, []);

  const signUp = async (inputObject) => {
    const res = await axios.post("/auth/sign-up", inputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (inputObject) => {
    try {
      const res = await axios.post("/auth/login", inputObject);

      // Assuming addAccessToken and setAuthUser are functions handling token and user data
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);

      // Return any additional data if needed
      return res.data;
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error during login:", error);

      // Optionally, you can throw a custom error or handle it in some other way
      throw new Error("Login failed. Please try again.");
    }
  };

  const logout = async () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const createAddress = async (data) => {
    const res = await axios.post("/profile/address", data);
    const newAddress = res.data.address;
    setAllAddress([newAddress, ...allAddress]);
  };

  const updateAddress = async (data) => {
    delete data.createdAt;
    delete data.updatedAt;
    delete data.user;
    const res = await axios.patch("/profile/address", data);
    const indexAddress = allAddress.findIndex((el) => el.id === data.id);
    const newAllAddress = [...allAddress];
    const updatedAddress = res.data.address;
    newAllAddress.splice(indexAddress, 1, updatedAddress);
    setAllAddress(newAllAddress);
  };

  const deleteAddress = async (addressId) => {
    try {
      await axios.delete(`/profile/address/${addressId}`);
      setAllAddress(allAddress.filter((address) => address.id !== addressId));
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAddress = async () => {
    try {
      const res = await axios.get("/profile/address");
      setAllAddress(res.data.addresses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        signUp,
        login,
        logout,
        allAddress,
        setAllAddress,
        createAddress,
        updateAddress,
        deleteAddress,
        getAllAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
