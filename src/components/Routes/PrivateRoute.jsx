import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const notAdmin = userInfo.data.isAdmin ? true : false;
  return notAdmin ? <Navigate to="/" replace /> : <Outlet />;
};

export default PrivateRoute;
