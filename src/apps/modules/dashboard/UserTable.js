import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserTable({ userlist, getdata }) {


  const [currentpage, setcurrentpage] =
    useState(1);

  const usersperpage = 10;

  const lastindex =
    currentpage * usersperpage;

  const firstindex =
    lastindex - usersperpage;

  const currentusers =
    userlist.slice(firstindex, lastindex);

  const totalpages = Math.ceil(userlist.length / usersperpage);

  const deletedata = (a) => {
    axios.delete(`http://localhost:8700/deleteuser/${a}`, { withCredentials: true }).then((r) => {
      console.log(r);
      getdata();
    })
      .catch((err) => { console.log(err); });
  };

  return (
    <div className="card mb-3 shadow border">
      <div className="card-body">

        <p>
          Employee List:
          [ {userlist.length} ]
        </p>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead>
              <tr>
                <th>sno</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Username</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Profile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentusers.map((u, index) => {
                return (
                  <tr key={u._id}>
                    <th>{firstindex + index + 1}</th>
                    <td style={{ whiteSpace: "nowrap" }}>{u.emailid}</td>
                    <td>{u.dob}</td>
                    <td>{u.gender}</td>
                    <td>{u.username}</td>
                    <td>{u.mobileno}</td>
                    <td>{u.role}</td>
                    <td>{u.picture ? (<img src={u.picture}
                      width="40"
                      height="40"
                      className="rounded-circle"
                      alt={u.username}
                      style={{ objectFit: "cover" }}
                    />
                    ) : ("No Image")}
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <Link to={"viewuser/" + u._id}
                        className="btn btn-primary btn-sm"
                      >
                        View
                      </Link>
                      <span
                        className="btn btn-danger btn-sm ms-1"
                        onClick={() =>
                          deletedata(
                            u._id
                          )
                        }
                      >
                        Del
                      </span>

                      <Link to={"edituser/" + u._id}
                        className="btn btn-warning btn-sm ms-1"
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

        </div>

        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-secondary"
            disabled={currentpage === 1}
            onClick={() =>
              setcurrentpage(currentpage - 1)
            }
          >
            Prev
          </button>

          {[...Array(totalpages)].map(
            (_, i) => (
              <button
                key={i}
                className={`btn ${currentpage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() =>
                  setcurrentpage(i + 1)
                }
              >
                {i + 1}
              </button>
            )
          )}

          <button
            className="btn btn-secondary"
            disabled={currentpage === totalpages}
            onClick={() =>
              setcurrentpage(currentpage + 1)}>
            Next
          </button>

        </div>

      </div>
    </div>
  );
}

export default UserTable;