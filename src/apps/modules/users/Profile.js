import React, {
  useEffect,
  useState
} from "react";
import axios from "axios";

function Profile() {
  const [userinfo, setuserinfo] =
    useState({});

  const getprofile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8700/myprofile",
        {
          withCredentials: true
        }
      );

      setuserinfo(response.data.user);

    } catch (error) {
      console.log(
        error.response?.data
      );
    }
  };

  useEffect(() => {
    getprofile();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">

        <h2>My Profile</h2>

        <img
          src={userinfo.picture}
          alt="profile"
          width="150"
        />

        <h4>
          Name: {userinfo.username}
        </h4>

        <h4>
          Email: {userinfo.emailid}
        </h4>

        <h4>
          Mobile: {userinfo.mobileno}
        </h4>

      </div>
    </div>
  );
}

export default Profile;