import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AppContext } from "../ContextProvider/AppContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    photoURL: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsChecked: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const {
    createUser,
    googleLogin,
    githubLogin,
    setuserdata,
    userData,
    user,
    updateUserData,
  } = useContext(AppContext);
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (formData.password !== formData.confirmPassword) {
      toast.error(`Password did not match.`);
      return;
    }
    if (formData.password.length < 6) {
      toast.error(`Password must be at least 6 characters long.`);
      return;
    }
    if (!regex.test(formData.password)) {
      toast.error(
        `Password must contain both uppercase and lowercase letters.`
      );

      return;
    }
    const { email, password, photoURL, firstName, confirmPassword } = formData;
    // console.log(email, password, displayName, photoURL);
    console.log(user);

    createUser(email, password).then((user) => {
      updateUserData(firstName, photoURL).then(() => {
        toast.success(`Signed up successfully`);
        navigate("/");
      });
    });
  };
  const from = location?.state || "/";
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then(() => {
        toast.success(`Signed up successfully`);
        navigate(from);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    document.title = "Sign Up || ArtVIsta";
  });

  return (
    <div className="py-8 px-4 lg:px-0">
      <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
      <div className="max-w-screen-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="border p-3 rounded-md border-amber-300"
        >
          <div className="mb-4">
            <label className="block  font-bold mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border  bg-slate-100 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full  rounded-lg border  bg-slate-100  border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border  bg-slate-100   border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2">Profile Image Url</label>
            <input
              type="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full rounded-lg border  bg-slate-100   border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg   border  bg-slate-100 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2 pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword2 ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPasswordpassword}
                onChange={handleChange}
                className="w-full rounded-lg   border  bg-slate-100 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50 px-4 py-2 pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                onClick={togglePasswordVisibility2}
              >
                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="termsChecked"
              checked={formData.termsChecked}
              onChange={handleChange}
              className="mr-2"
              // required
            />
            <span className="text-gray-700">
              I agree to the terms and conditions
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4  "
            >
              Sign Up
            </button>
          </div>
          <div className="w-full flex flex-col lg:flex-row mt-2 justify-center items-center gap-2">
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
          <div className="flex flex-col  md:flex-row items-center justify-center  py-3 gap-1 md:gap-2">
            <h1 className="font-semibold">Have you an account?</h1>
            <NavLink to="/login" className="text-sm text-amber-700">
              Please Sign In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
