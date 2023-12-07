import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const notAdmin = userInfo.isAdmin ? true : false;
  return notAdmin ? <Navigate to="/search" replace /> : <Outlet />;
};

export default PrivateRoute;
