import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function User_login() {
  const mynav = useNavigate();

  const [login, updatelogin] = useState({
    emailid: '',
    password: '',
    role: ''
  });

  const updatelogininfo = (d) => {
    const { name, value } = d.target;

    updatelogin((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const Myformsubmit = () => {
    axios
      .post(
        'http://localhost:8700/userlogin',
        login,
        {
          withCredentials: true
        }
      )
      .then((d) => {
        if (d.data.mystatus === 200) {
          toast.success(d.data.msg, {
            position: 'top-left',
            theme: 'dark'
          });

          setTimeout(() => {
            if (d.data.role === 'admin') {
              mynav('/admin-dashboard');
            }

            if (d.data.role === 'sales') {
              mynav('/sales-dashboard');
            }

            if (d.data.role === 'invoice') {
              mynav('/invoice-dashboard');
            }

            if (d.data.role === 'user') {
              mynav('/dashboard');
            }
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error.response);

        toast.error('Login failed', {
          position: 'top-left',
          theme: 'dark'
        });
      });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <ToastContainer />

      <div
        className="row w-100 shadow-lg rounded-4 overflow-hidden"
        style={{ maxWidth: '1100px' }}
      >
        <div className="col-md-5 bg-white d-flex flex-column justify-content-center p-5">
          <div className="mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="logo"
              width="70"
            />
          </div>

          <h1 className="display-2 fw-bold">
            Login <br /> Screen
          </h1>
        </div>

        <div className="col-md-7 position-relative bg-warning p-5 d-flex align-items-center justify-content-center">
          <div
            className="bg-white rounded-4 shadow-lg p-5 w-100"
            style={{ maxWidth: '500px' }}
          >
            <h3 className="fw-bold mb-4">
              Login into your account
            </h3>

            {/* Email */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <MdOutlineEmail />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={login.emailid}
                onChange={updatelogininfo}
                name="emailid"
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
                value={login.password}
                onChange={updatelogininfo}
                name="password"
              />
            </div>

            {/* Role Section */}
            <div className="mb-3">
              <select
                className="form-select"
                name="role"
                value={login.role}
                onChange={updatelogininfo}
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="sales">Sales</option>
                <option value="invoice">Invoice</option>
              </select>
            </div>

            <div className="text-end mb-3">
              <small className="text-primary">
                Forgot password?
              </small>
            </div>

            <button
              className="btn btn-warning w-100 mb-3 fw-bold"
              onClick={Myformsubmit}
            >
              Login now
            </button>

            <div className="text-center mb-3">
              OR
            </div>

            <Link
              to="/usermanagement/register"
              className="btn btn-outline-warning w-100 fw-bold"
            >
              Signup now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User_login;