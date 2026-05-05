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

  /* Login Check */
  if (!userinfo) {
    return (
      <Navigate
        to="/usermanagement"
      />
    );
  }

  /* Role Check */
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