import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserTable() {
  const [user, updateuser] = useState([]);

  const getdata = () => {
    axios
      .get(
        "http://localhost:8700/alluserlist",
        {
          withCredentials: true
        }
      )
      .then((d) => {
        console.log(d.data.data);
        updateuser(d.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const deletedata = (a) => {
    axios
      .delete(
        `http://localhost:8700/deleteuser/${a}`,
        {
          withCredentials: true
        }
      )
      .then((r) => {
        console.log(r);
        getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card mb-3 shadow border">
      <div className="card-body">
        <p>
          Employee List: [ {user.length} ]
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>sno</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Username</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Role</th>
              <th>Profile</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {user.map((u, index) => {
              return (
                <tr key={u._id}>
                  <th>{index + 1}</th>
                  <td>{u.emailid}</td>
                  <td>{u.dob}</td>
                  <td>{u.gender}</td>
                  <td>{u.username}</td>
                  <td>{u.mobileno}</td>
                  <td>{u.password}</td>
                  <td>{u.role}</td>

                  <td>
                    <img
                      src={u.picture}
                      width="30"
                      alt={u.username}
                    />
                  </td>

                  <td>
                    <Link
                      to={"viewuser/" + u._id}
                      className="badge text-bg-primary btn"
                    >
                      View
                    </Link>

                    <span
                      className="badge text-bg-danger btn ms-1"
                      onClick={() =>
                        deletedata(u._id)
                      }
                    >
                      Del
                    </span>

                    <Link
                      to={"edituser/" + u._id}
                      className="badge text-bg-warning ms-1 btn"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default UserTable;