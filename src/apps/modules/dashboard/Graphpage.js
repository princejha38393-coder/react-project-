import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function Graphpage() {

  // STATE
  const [data, setData] = useState([]);

  // API CALL
  const getAnalytics = () => {

    axios
      .get("http://localhost:8700/analytics")

      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  // USE EFFECT
  useEffect(() => {
    getAnalytics();
  }, []);

  // TOTAL MEMBERS
  const totalMembers =
    data.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="container-fluid mt-4">

      {/* TOP CARDS */}

      <div className="row mb-4">

        <div className="col-sm-3">
          <div className="card bg-primary text-white border-0 shadow-lg p-4 rounded-4">

            <h5>Total Users</h5>

            <h2>
              {data.find((d) => d.name === "Users")?.total || 0}
            </h2>

          </div>
        </div>

        <div className="col-sm-3">
          <div className="card bg-success text-white border-0 shadow-lg p-4 rounded-4">

            <h5>Total Admins</h5>

            <h2>
              {data.find((d) => d.name === "Admins")?.total || 0}
            </h2>

          </div>
        </div>

        <div className="col-sm-3">
          <div className="card bg-danger text-white border-0 shadow-lg p-4 rounded-4">

            <h5>Total Sales</h5>

            <h2>
              {data.find((d) => d.name === "Sales")?.total || 0}
            </h2>

          </div>
        </div>

        <div className="col-sm-3">
          <div className="card bg-warning text-dark border-0 shadow-lg p-4 rounded-4">

            <h5>Total Invoices</h5>

            <h2>
              {data.find((d) => d.name === "Invoices")?.total || 0}
            </h2>

          </div>
        </div>

      </div>

      {/* MAIN GRAPH */}

      <div className="row">

        <div className="col-12">

          <div className="card bg-dark border-0 shadow-lg rounded-4 p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3 className="text-white">
                Website Analytics
              </h3>

              <h5 className="text-info">
                Total Members : {totalMembers}
              </h5>

            </div>

            <ResponsiveContainer width="100%" height={450}>

              <BarChart data={data}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#555"
                />

                <XAxis
                  dataKey="name"
                  stroke="#fff"
                />

                <YAxis stroke="#fff" />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="total"
                  fill="#00c6ff"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Graphpage;