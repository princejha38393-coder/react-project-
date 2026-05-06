import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../reduxpage/Myfunctions";
import {
  Users,
  UserCheck,
  UserRoundX,
  Search,
  Bell
} from "lucide-react";

function Mainpage() {
  const [user, updateuser] = useState([]);
  const [search, setsearch] =
    useState("");

  const abc = useSelector(
    (state) => state.counter.value
  );

  const xyz = useDispatch();

  const getdata = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/alluserlist`,
        {
          withCredentials: true
        }
      );

      console.log(response.data.data);
      updateuser(response.data.data);

    } catch (error) {
      console.log(
        error.response?.data ||
        error.message
      );
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  /* Search Filter */
  const filteredusers =
    user.filter((u) =>
      u.username
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded-4 shadow-sm mb-4">

        <div className="input-group w-25">
          <span className="input-group-text bg-white border-0">
            <Search size={18} />
          </span>

          <input
            type="text"
            className="form-control border-0"
            placeholder="Search here..."
            value={search}
            onChange={(e) =>
              setsearch(
                e.target.value
              )
            }
          />
        </div>

        <Bell size={22} />
      </div>

      {/* Banner */}
      <div className="bg-primary text-white rounded-4 p-5 mb-4 shadow">
        <h1 className="fw-bold">
          Explore Your Dashboard 🚀
        </h1>

        <p className="mb-0">
          Manage employees, analytics and reports easily.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 p-4 h-100">
            <Users size={35} />

            <h6 className="text-muted mt-3">
              Total Employees
            </h6>

            <h2>{user.length}</h2>

            <button
              className="btn btn-primary rounded-pill mt-3"
              onClick={() =>
                xyz(increment())
              }
            >
              Counter {abc}
            </button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 p-4 h-100">
            <UserCheck size={35} />

            <h6 className="text-muted mt-3">
              Male Employees
            </h6>

            <h2>
              {
                user.filter(
                  (m) =>
                    m.gender
                      ?.toLowerCase() ===
                    "male"
                ).length
              }
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 p-4 h-100">
            <UserRoundX size={35} />

            <h6 className="text-muted mt-3">
              Female Employees
            </h6>

            <h2>
              {
                user.filter(
                  (m) =>
                    m.gender
                      ?.toLowerCase() ===
                    "female"
                ).length
              }
            </h2>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="card border-0 shadow rounded-4 p-4">
        <h4 className="fw-bold mb-4">
          All Employees
        </h4>

        <UserTable
          userlist={filteredusers}
        />
      </div>

    </div>
  );
}

export default Mainpage;