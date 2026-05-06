import React from "react";
import {Navigate} from "react-router-dom";

function ProtectedRoute({
  children,
  role
}) {
  const userdata =
    localStorage.getItem(
      "userpass"
    );

  const userinfo =
    userdata
      ? JSON.parse(userdata)
      : null;


  if (!userinfo) {
    return (
      <Navigate
        to="/usermanagement"
      />
    );
  }

 
  if (
    userinfo.role !== role
  ) {
    return (
      <Navigate to="/" />
    );
  }

  return children;
}

export default ProtectedRoute;