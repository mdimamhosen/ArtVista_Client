import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";
import { Tooltip } from "react-tippy";
import { toast } from "react-toastify";
import avatar from "../Assets/765-default-avatar.png";
export default function Navbar() {
  const { user, logout, loading, setThemeOvserve } = useContext(AppContext);
  const [isSideMenuOpen, setMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const navlinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "All Art&Craft",
      link: "/allartcraft",
    },
  ];
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("theme", theme);
      document.querySelector("html").setAttribute("data-theme", theme);
    }
  }, [theme, loading]);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("coffee");
      setThemeOvserve(true);
    } else {
      setTheme("light");
      setThemeOvserve(false);
    }
  };

  const handleSignOut = () => {
    logout();
    navigate("/");
    toast.success("Logged out successfully!");
  };

  return (
    <main>
      <nav className="flex justify-between font-mono container mx-auto items-center py-4 px-2 md:px-3 lg:px-0 ">
        <section className="flex items-center gap-4">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-2xl cursor-pointer lg:hidden"
          />
          <NavLink to="/" className="lg:text-4xl text-2xl font-mono">
            ArtVista
          </NavLink>
        </section>
        <section className="flex items-center gap-4">
          {navlinks.map((d, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive
                  ? `hidden lg:block font-bold text-amber-800 hover:text-amber-900 underline transition-all duration-300 ease-linear `
                  : `hidden lg:block font-bold  `
              }
              to={d.link}
            >
              {d.label}
            </NavLink>
          ))}
          {/* {user && ( */}
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `hidden lg:block font-bold text-amber-800 hover:text-amber-900 underline transition-all duration-300 ease-linear `
                  : `hidden lg:block font-bold  `
              }
              to="/addcraft"
            >
              Add Craft Item
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `hidden lg:block font-bold text-amber-800 hover:text-amber-900 underline transition-all duration-300 ease-linear `
                  : `hidden lg:block font-bold  `
              }
              to="/mycraft"
            >
              My Art&Craft List
            </NavLink>
          </>
          {/* )} */}
        </section>

        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all z-50 ${
            isSideMenuOpen && "translate-x-0"
          }`}
        >
          <section
            className={
              theme === "light"
                ? "text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-50 w-56 flex"
                : `text-white bg-[#2c1b1b] flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-50 w-56 flex`
            }
          >
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            {navlinks.map((d, i) => (
              <NavLink
                key={i}
                className={
                  theme === "light"
                    ? "font-bold border border-double border-amber-400 px-1 py-2 rounded-lg"
                    : "font-bold border border-double bg-amber-900 border-amber-300 px-1 py-2 rounded-lg"
                }
                to={d.link}
              >
                {d.label}
              </NavLink>
            ))}
            {/* {user && ( */}
            <>
              <NavLink
                className={
                  theme === "light"
                    ? "font-bold border border-double border-amber-400 px-1 py-2 rounded-lg"
                    : "font-bold border border-double bg-amber-900 border-amber-300 px-1 py-2 rounded-lg"
                }
                to="/addcraft"
              >
                Add Craft Item
              </NavLink>
              <NavLink
                className={
                  theme === "light"
                    ? "font-bold border border-double border-amber-400 px-1 py-2 rounded-lg"
                    : "font-bold border border-double bg-amber-900 border-amber-300 px-1 py-2 rounded-lg"
                }
                to="/mycraft"
              >
                My Art&Craft List
              </NavLink>
            </>
            {/* )} */}
            {!user && (
              <div className="flex flex-col justify-center items-center gap-4">
                <NavLink
                  className="w-full rounded text-center transition-all duration-300 ease-linear hover:bg-amber-900 bg-amber-800 px-2 py-1 text-white font-bold hover:text-gray-100"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="w-full rounded bg-amber-800 text-center px-2 py-1 transition-all duration-300 ease-linear hover:bg-amber-900 text-white font-bold hover:text-gray-100"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </section>
        </div>

        <section className="flex items-center gap-4">
          <Tooltip title="Change theme" position="top" trigger="mouseenter">
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleThemeChange}
                checked={theme === "coffee"}
                type="checkbox"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </Tooltip>
          {user && (
            <>
              <Tooltip
                title={user.displayName}
                position="top"
                trigger="mouseenter"
              >
                <div className="dropdown dropdown-end z-50 ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="User Avatar" src={user.photoURL || avatar} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        to="/myprofile"
                        className={({ isActive }) =>
                          isActive
                            ? "justify-between text-white font-bold bg-amber-700 hover:bg-amber-800"
                            : "justify-between  font-bold"
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Tooltip>
              <button
                onClick={handleSignOut}
                className="font-bold rounded bg-amber-800 text-white px-2 py-1 hover:bg-amber-900 transition-all duration-300 ease-linear"
              >
                Logout
              </button>
            </>
          )}
          {!user && (
            <div className="flex justify-center items-center gap-2">
              <NavLink
                className="hidden rounded lg:block bg-amber-800 hover:bg-amber-900 transition-all duration-300 ease-linear px-2 py-1 text-white font-bold hover:text-gray-100"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="hidden rounded lg:block bg-amber-800 hover:bg-amber-900 transition-all duration-300 ease-linear px-2 py-1 text-white font-bold hover:text-gray-100"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </section>
      </nav>
      <hr />
    </main>
  );
}
