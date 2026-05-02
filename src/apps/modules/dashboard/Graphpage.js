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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  }
];

function Graphpage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-dark g-0 p-3">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="uv" fill="#d88484" />
              <Bar dataKey="pv" fill="#ff0000" />
              <Bar dataKey="amt" fill="#bd3535" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Graphpage;

export function Mycustomgraph() {
  const [dt, updt] = useState([]);

  const mydata = () => {
    axios.get("http://localhost:8700/sales")
      .then((d) => {
        updt(d.data);
        console.log(d.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    mydata();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-dark g-0 p-3">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dt}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="price" fill="#d88484" />
              <Bar dataKey="discount" fill="#00cdf1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}