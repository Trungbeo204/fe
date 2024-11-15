import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenContext from "./AuthenContext";
import authAPI from "../../apis/authAPI";
const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });
  
  const navigate = useNavigate();
  const handleLogin = async () => {
   try {
    const res = await authAPI.authInfo();
    const data = res.data;
    setAuth({
      isAuthenticated: true,
      user: data.userInfo,
    });
   } catch (error) {
    if (error.response && error.response.status === 403) {
      navigate("/")
    } else {
      console.log('Bạn cần đăng nhập');
    }
   }
  };
  const handleLogout = async () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      handleLogin();
    }
  }, []);

 
  return (
    <AuthenContext.Provider
      value={{
        auth,
        setAuth,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
export default AuthState;
