import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function User_view() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getsingleuser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8700/singleuser/${id}`
      );
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleuser();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2>User Details</h2>

        <p><b>Email:</b> {user.emailid}</p>
        <p><b>Username:</b> {user.username}</p>
        <p><b>DOB:</b> {user.dob}</p>
        <p><b>Gender:</b> {user.gender}</p>
        <p><b>Mobile:</b> {user.mobileno}</p>
        <p><b>Password:</b> {user.pass}</p>

        <img
          src={user.picture}
          alt={user.username}
          width="120"
        />

        <br /><br />

        <Link
          to="/dashboard"
          className="btn btn-dark"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default User_view;