import React, { useState } from "react";
import axios from "axios";
import { toast,
  ToastContainer
} from "react-toastify";

function ForgotPassword() {
  const [emailid, setemailid] =
    useState("");

  const handlesubmit = async () => {
    try {
      const response =
        await axios.post("http://localhost:8700/forgot-password",{emailid});

       toast.success(response.data.msg,{position: "top-left",theme: "dark"});

       setemailid("");

    } catch (error)
     { toast.error(error.response?.data?.msg ||"Something went wrong",{position: "top-left",theme: "dark"});}};

  return (
    <div className="container mt-5">
      <ToastContainer />

      <div className="card p-4 shadow">

        <h2>
          Forgot Password
        </h2>

        <input
          type="email"
          className="form-control mt-3"
          placeholder="Enter your email"
          value={emailid}
          onChange={(e) =>setemailid(e.target.value)}/>

        <button
          className="btn btn-primary mt-3"
          onClick={handlesubmit}
        >
          Send Reset Link
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;