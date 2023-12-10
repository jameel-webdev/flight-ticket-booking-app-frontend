import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const adminUser = userInfo.data.isAdmin ? true : false;
  return adminUser ? <Outlet /> : <Navigate to="/search" replace />;
};

export default AdminPrivateRoute;
