import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function UserEdit() {
  const mynav = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const getsingleuser = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/singleuser/${id}`,
        {
          withCredentials: true,
        }
      );

      const user = res.data?.user || res.data?.data;

      if (!user) {
        toast.error("User data not found");
        return;
      }

      setValue("emailid", user.emailid || "");
      setValue("username", user.username || "");
      setValue("dob", user.dob || "");
      setValue("mobileno", user.mobileno || "");
      setValue("gender", user.gender || "");
      setValue("picture", user.picture || "");
    } catch (error) {
      console.log(error);
      toast.error("User fetch failed");
    }
  };

  useEffect(() => {
    getsingleuser();
  }, [id]);

  const formsubmit = async (data) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/edituser/${id}`,
        data,
        {
          withCredentials: true,
        }
      );

      toast.success("User Updated Successfully");

      setTimeout(() => {
        mynav("/usermanagement");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  const deleteuser = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/deleteuser/${id}`,
        {
          withCredentials: true,
        }
      );

      toast.success("User Deleted Successfully");

      setTimeout(() => {
        mynav("/usermanagement");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(formsubmit)}>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-7 bg-light shadow p-3">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="h2 mt-3 mb-5">
                    Edit User Details
                  </p>
                  <ToastContainer />
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("emailid", {
                        required: true,
                      })}
                    />
                    {errors.emailid && (
                      <p className="text-danger">
                        Email is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("username", {
                        required: true,
                      })}
                    />
                    {errors.username && (
                      <p className="text-danger">
                        Username is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("dob")}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      {...register("mobileno")}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender
                    </label>
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
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Profile Pic
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="URL only"
                      {...register("picture")}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Password (optional)
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("pass", {
                        minLength: 5,
                      })}
                    />
                    {errors.pass?.type === "minLength" && (
                      <p className="text-warning">
                        Minimum 5 characters required
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-md-12 text-center">
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Update User"
                    />

                    <button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={deleteuser}
                    >
                      Delete User
                    </button>

                    <Link
                      to="/usermanagement"
                      className="ms-4"
                    >
                      Back
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserEdit;