import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../ContextProvider/AppContext";
import img from "../Assets/765-default-avatar.png";
import { NavLink } from "react-router-dom";

import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const MyProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { user, updateUserData } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      setIsUserLoaded(true);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSaveChanges = async () => {
    const { displayName, photoURL } = formData;

    updateUserData(displayName, photoURL).then(() => {
      Swal.fire({
        icon: "success",
        title: "Profile Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  React.useEffect(() => {
    document.title = "My Profile || ArtVIsta";
  });
  const { reloadUserInfo } = user;
  const userEmail = reloadUserInfo.email;
  const userDisplayName = reloadUserInfo?.displayName;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="lg:text-5xl md:text-3x text-xl font-bold text-center text-amber-700 mb-8">
        <Typewriter
          words={["My Profile", "Welcome to Your Profile", userDisplayName]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      {!user && (
        <div className="h-[50Vh] flex flex-col justify-center items-center gap-5 md:gap-5 text-pretty">
          <div className="font-bold text-sm md:text-2xl lg:text-4xl text-red-700 ">
            You are not logged in. Please login to view your profile. Thank you!
          </div>
          <div>
            <NavLink
              to="/login"
              className="border py-3 px-3 bg-gray-700 text-white font-bold text-lg"
            >
              Login Now
            </NavLink>
          </div>
        </div>
      )}
      {isUserLoaded && (
        <div
          className="flex flex-col items-center  border-2 border-amber-400  w-[80%] lg:w-1/2 mx-auto py-3 shadow-2xl "
          data-aos="fade-up"
        >
          <img
            src={user.photoURL || img}
            className="w-32 h-32 rounded-full mb-6 border-4 border-amber-600 shadow-lg"
          />
          <div className="mb-6 w-full border p-1 max-w-md">
            <label
              htmlFor="displayName"
              className="block text-sm font-bold   mb-1"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={user.displayName || ""}
              className="input-field p-2 outline-0 border-0  w-full bg-slate-100"
              readOnly
            />
          </div>
          <div className="mb-6 border p-1  w-full max-w-md">
            <label htmlFor="email" className="block text-sm font-bold   mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email || ""}
              className="input-field  p-2 outline-0  bg-slate-100 w-full"
              readOnly
            />
          </div>
          {user.uid && (
            <div className="mb-6 border p-1  w-full max-w-md">
              <label
                htmlFor="userId"
                className="block text-sm font-bold   mb-1"
              >
                User ID
              </label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={user.uid}
                className="input-field  p-2 outline-0  bg-slate-100 w-full"
                readOnly
              />
            </div>
          )}
          {user.metadata && user.metadata.lastSignInTime && (
            <div className="mb-6  border p-1  w-full max-w-md">
              <label
                htmlFor="lastSignInTime"
                className="block text-sm font-bold   mb-1"
              >
                Last Sign In Time
              </label>
              <input
                type="text"
                id="lastSignInTime"
                name="lastSignInTime"
                value={user.metadata.lastSignInTime}
                className="input-field  p-2 outline-0  bg-slate-100 w-full"
                readOnly
              />
            </div>
          )}
          {user.metadata && user.metadata.creationTime && (
            <div className="mb-6 border p-1  w-full max-w-md">
              <label
                htmlFor="creationTime"
                className="block text-sm font-bold   mb-1"
              >
                Account Creation Time
              </label>
              <input
                type="text"
                id="creationTime"
                name="creationTime"
                value={user.metadata.creationTime}
                className="input-field  p-2 outline-0  bg-slate-100 w-full"
                readOnly
              />
            </div>
          )}
          <div>
            <Tooltip
              title="Update Your Profile Information"
              position="top"
              trigger="mouseenter"
            >
              <button
                className="py-2 px-2 border-2  rounded-md   font-bold  bg-amber-800 text-white hover:bg-amber-900 transition-all duration-300 ease-linear"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Update Profile
              </button>
            </Tooltip>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form action="" className="flex flex-col gap-3">
                  <label htmlFor="userName">
                    <input
                      type="text"
                      id="displayName"
                      placeholder="New Username"
                      className="input input-bordered w-full max-w-xs"
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor="photoUrl">
                    <input
                      type="text"
                      id="photoURL"
                      placeholder=" New Photo URL"
                      className="input input-bordered w-full max-w-xs"
                      onChange={handleChange}
                    />
                  </label>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button onClick={() => handleSaveChanges()} className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
