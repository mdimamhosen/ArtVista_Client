import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({ duration: 1000 });
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white font-mono">
      <div className="max-w-md p-8 text-center">
        <h1 className="text-4xl mb-4" data-aos="fade-up">
          Oops! Something went wrong.
        </h1>
        <p className="mb-8" data-aos="fade-up" data-aos-delay="200">
          The page you are looking for could not be found.
        </p>
        <button
          className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded-md"
          onClick={handleGoBack}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
