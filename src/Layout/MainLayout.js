import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Comonents/Navbar";
import Footer from "../Comonents/Footer";
import { AppContext } from "../ContextProvider/AppContext";
import { Triangle } from "react-loader-spinner";

const MainLayout = () => {
  const { loading } = useContext(AppContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen ">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#FF8F00"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }
};

export default MainLayout;
