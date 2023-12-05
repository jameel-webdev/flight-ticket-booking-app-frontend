import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const adminUser = userInfo.isAdmin ? true : false;
  return adminUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminPrivateRoute;
