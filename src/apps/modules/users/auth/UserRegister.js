import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function UserRegister() {
  const mynav = useNavigate();

  const { register, handleSubmit } = useForm();

  const formsubmit = async (d) => {
    try {
      const r = await axios.post(
        `${process.env.REACT_APP_API_URL}/userregister`,
        d,
        {
          withCredentials: true
        }
      );

      if (r.data.mystatus === 420 || r.data.mystatus === 450) {
        toast.error(r.data.msg);
      } else if (r.data.mystatus === 250) {
        toast.success(r.data.msg);

        setTimeout(() => {
          mynav("/usermanagement");
        }, 2000);
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <form onSubmit={handleSubmit(formsubmit)}>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <ToastContainer />

        <div
          className="row w-100 shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "1100px" }}
        >
          {/* Left Side Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-md-6 bg-white d-flex align-items-center justify-content-center p-5"
          >
            <h1 className="display-2 fw-bold">
              Register Screen
            </h1>
          </motion.div>

          {/* Right Side Animation */}
          <div className="col-md-6 bg-warning d-flex align-items-center justify-content-center p-4">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-4 shadow-lg p-5 w-100"
              style={{ maxWidth: "500px" }}
            >
              <h2 className="fw-bold mb-4 text-center">
                Create your account
              </h2>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("emailid", {
                      required: true
                    })}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    {...register("username", {
                      required: true
                    })}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register("password", {
                      required: true
                    })}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    {...register("mobileno")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="date"
                    className="form-control"
                    {...register("dob")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    className="form-select"
                    {...register("gender")}
                  >
                    <option value="">
                      Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-12 mb-3">
                  <select
                    className="form-select"
                    {...register("role", {
                      required: true
                    })}
                  >
                    <option value="">
                      Select Role
                    </option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="sales">Sales</option>
                    <option value="invoice">Invoice</option>
                  </select>
                </div>

                <div className="col-md-12 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Profile Picture URL"
                    {...register("picture")}
                  />
                </div>

                {/* Animated Register Button */}
                <div className="col-md-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-warning w-100 fw-bold"
                  >
                    Register now
                  </motion.button>
                </div>

                <div className="col-md-12 text-center mt-4">
                  <Link
                    to="/usermanagement"
                    className="text-decoration-none"
                  >
                    Back to Login
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserRegister;