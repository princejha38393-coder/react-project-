import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import axios from "axios";

function UserLogin() {
  const mynav = useNavigate();

  const [login, updatelogin] = useState({
    emailid: "",
    password: "",
    role: "",
  });

  const updatelogininfo = (d) => {
    const { name, value } = d.target;

    updatelogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Myformsubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/userlogin`, login, {
        withCredentials: true,
      })
      .then((d) => {
        if (d.data.mystatus === 200) {
          toast.success(d.data.msg, {
            position: "top-left",
            theme: "dark",
          });

          localStorage.setItem(
            "userpass",
            JSON.stringify({
              jemail: login.emailid,
              role: d.data.role,
            })
          );

          setTimeout(() => {
            if (d.data.role === "admin") {
              mynav("/admin-dashboard");
            }

            if (d.data.role === "sales") {
              mynav("/sales-dashboard");
            }

            if (d.data.role === "invoice") {
              mynav("/invoice-dashboard");
            }

            if (d.data.role === "user") {
              mynav("/dashboard");
            }
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error.response);

        toast.error("Login failed", {
          position: "top-left",
          theme: "dark",
        });
      });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <ToastContainer />

      <div
        className="row w-100 shadow-lg rounded-4 overflow-hidden"
        style={{ maxWidth: "1100px" }}
      >
        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="col-md-6 bg-white d-flex align-items-center justify-content-center p-5"
        >
          <h1 className="display-2 fw-bold">
            Login Screen
          </h1>
        </motion.div>

        {/* Right Side */}
        <div className="col-md-6 bg-warning d-flex align-items-center justify-content-center p-4">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-4 shadow-lg p-5 w-100"
            style={{ maxWidth: "500px" }}
          >
            <h2 className="fw-bold mb-4 text-center">
              Login your account
            </h2>

            {/* Email */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <MdOutlineEmail />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="emailid"
                value={login.emailid}
                onChange={updatelogininfo}
              />
            </div>

            {/* Password */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <TbLockPassword />
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={login.password}
                onChange={updatelogininfo}
              />
            </div>

            {/* Role */}
            <select
              name="role"
              value={login.role}
              onChange={updatelogininfo}
              className="form-select mb-3"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="sales">Sales</option>
              <option value="invoice">Invoice</option>
            </select>

            {/* Forgot Password */}
            <div className="mb-3">
              <Link
                to="/forgot-password"
                className="text-decoration-none"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-warning w-100 fw-bold"
              onClick={Myformsubmit}
            >
              Login now
            </motion.button>

            {/* Register Link */}
            <div className="text-center mt-4">
              <Link
                to="/usermanagement/register"
                className="text-decoration-none"
              >
                Back to Register
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;