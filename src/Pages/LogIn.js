import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";
import { toast } from "react-toastify";

const LogIn = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(AppContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const { email, password } = formData;
    signInUser(email, password)
      .then((res) => {
        const from = location.state || "/";
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const from = location?.state || "/";
  const handleGoogleLogin = (googleProvider) => {
    googleProvider()
      .then(() => {
        toast.success(`Signed in successfully`);
        navigate(from);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    document.title = "Login || ArtVIsta";
  });

  return (
    <div className="py-8 px-4 lg:px-0 font-mono">
      <h1 className="text-3xl font-bold text-center mb-6">My Account</h1>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className=" border border-amber-500   -lg shadow-md p-6">
          <h1 className="text-xl font-semibold mb-4">LOGIN</h1>
          <p className="  mb-4">
            If you have an account with us, please log in.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block  font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full   -lg  border bg-slate-100 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block  font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full   -lg border-gray-300 border bg-slate-100 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-amber-800  transition-all duration-300 ease-linear   hover:bg-amber-900 text-white font-bold py-2 px-4    mb-4  "
              >
                Sign In
              </button>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-2">
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="bg-orange-600 w-full  transition-all duration-300 ease-linear   text-center   hover:bg-orange-500 text-white font-bold py-2 px-4    flex justify-center items-center gap-2"
              >
                <FaGoogle />
                Sign in with Google
              </button>
              <button
                onClick={() => handleSocialLogin(githubLogin)}
                className="bg-black w-full transition-all duration-300 ease-linear   justify-center hover:bg-gray-800 text-white font-bold py-2 px-4    flex items-center gap-2"
              >
                <FaGithub />
                Sign in with GitHub
              </button>
            </div>
          </form>
        </div>
        <div className=" border border-amber-500   -lg shadow-md p-6">
          <h1 className="text-xl font-semibold mb-4">NEW CUSTOMER?</h1>
          <p className="  mb-4">
            Registering for this site allows you to access your order status and
            history. We’ll get a new account set up for you in no time. We only
            ask you for information necessary to make the purchase process
            faster and easier.
          </p>
          <NavLink to="/signup">
            <button className="bg-amber-800  transition-all duration-300 ease-linear   hover:bg-amber-900 text-white font-bold py-2 px-4      ">
              Register Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
