import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserRegister() {
  const mynav = useNavigate();

  const {
    register,
    handleSubmit
  } = useForm();

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
      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "#efefef" }}
      >
        <ToastContainer />

        <div
          className="row shadow rounded-4 overflow-hidden"
          style={{ width: "90%", maxWidth: "1200px" }}
        >
          <div className="col-md-5 bg-white p-5 d-flex flex-column justify-content-center">
            <h1 className="fw-bold">
              Register Screen
            </h1>
          </div>

          <div
            className="col-md-7 d-flex align-items-center justify-content-center"
            style={{ background: "#fbbc04" }}
          >
            <div
              className="bg-white p-5 rounded-4 shadow"
              style={{ width: "85%" }}
            >
              <h2 className="fw-bold mb-4">
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

                <div className="col-md-12">
                  <button
                    className="btn w-100 fw-bold"
                    style={{
                      background: "#fbbc04"
                    }}
                  >
                    Register now
                  </button>
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
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserRegister;