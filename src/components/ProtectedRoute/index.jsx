import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "hooks/UserContext";

const ProtectedRoute = ({
  allowedRoles,
  redirectPath = '/login',
  children
}) => {
  const { user } = useUser();
  const { loading } = user;

  if (loading) {
    return <div>Loading...</div>
  }
  if (user.data) {
    return children ? children : <Outlet/>
    
  }
    return <Navigate to={redirectPath} replace />
}
export {ProtectedRoute}