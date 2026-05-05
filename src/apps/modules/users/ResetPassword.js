import React, {
  useState
} from "react";
import axios from "axios";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import {
  toast,
  ToastContainer
} from "react-toastify";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setpassword] =
    useState("");

  const [confirmpassword,
    setconfirmpassword] =
    useState("");

  const handlesubmit = async () => {
    if (
      password !==
      confirmpassword
    ) {
      toast.error(
        "password not matched"
      );
      return;
    }

    try {
      const response =
        await axios.post(
          `http://localhost:8700/reset-password/${token}`,
          {
            password
          }
        );

      toast.success(
        response.data.msg
      );

      setTimeout(() => {
        navigate(
          "/usermanagement"
        );
      }, 2000);

    } catch (error) {
      toast.error(
        error.response?.data?.msg
      );
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />

      <div className="card p-4 shadow">

        <h2>
          Reset Password
        </h2>

        <input
          type="password"
          className="form-control mt-3"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setpassword(
              e.target.value
            )
          }
        />

        <input
          type="password"
          className="form-control mt-3"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) =>
            setconfirmpassword(
              e.target.value
            )
          }
        />

        <button
          className="btn btn-success mt-3"
          onClick={handlesubmit}
        >
          Reset Password
        </button>

      </div>
    </div>
  );
}

export default ResetPassword;