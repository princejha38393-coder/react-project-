import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserTable({
  userlist,
  getdata
}) {
  /* Pagination */
  const [currentpage, setcurrentpage] =
    useState(1);

  const usersperpage = 10;

  const lastindex =
    currentpage * usersperpage;

  const firstindex =
    lastindex - usersperpage;

  const currentusers =
    userlist.slice(
      firstindex,
      lastindex
    );

  const totalpages = Math.ceil(
    userlist.length /
      usersperpage
  );

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
          Employee List:
          [ {userlist.length} ]
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
            {currentusers.map(
              (u, index) => {
                return (
                  <tr key={u._id}>
                    <th>
                      {firstindex +
                        index +
                        1}
                    </th>

                    <td>
                      {u.emailid}
                    </td>

                    <td>{u.dob}</td>

                    <td>
                      {u.gender}
                    </td>

                    <td>
                      {u.username}
                    </td>

                    <td>
                      {u.mobileno}
                    </td>

                    <td>
                      {u.password}
                    </td>

                    <td>{u.role}</td>

                    <td>
                      {u.picture ? (
                        <img
                          src={
                            u.picture
                          }
                          width="30"
                          alt={
                            u.username
                          }
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>

                    <td>
                      <Link
                        to={
                          "viewuser/" +
                          u._id
                        }
                        className="badge text-bg-primary btn"
                      >
                        View
                      </Link>

                      <span
                        className="badge text-bg-danger btn ms-1"
                        onClick={() =>
                          deletedata(
                            u._id
                          )
                        }
                      >
                        Del
                      </span>

                      <Link
                        to={
                          "edituser/" +
                          u._id
                        }
                        className="badge text-bg-warning ms-1 btn"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="d-flex gap-2 mt-3">

          <button
            className="btn btn-secondary"
            disabled={
              currentpage === 1
            }
            onClick={() =>
              setcurrentpage(
                currentpage - 1
              )
            }
          >
            Prev
          </button>

          {[...Array(totalpages)].map(
            (_, i) => (
              <button
                key={i}
                className="btn btn-primary"
                onClick={() =>
                  setcurrentpage(
                    i + 1
                  )
                }
              >
                {i + 1}
              </button>
            )
          )}

          <button
            className="btn btn-secondary"
            disabled={
              currentpage ===
              totalpages
            }
            onClick={() =>
              setcurrentpage(
                currentpage + 1
              )
            }
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default UserTable;