import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AppContext } from "../ContextProvider/AppContext";
import { Triangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="w-full h-[100Vh] flex justify-center items-center">
        <Triangle
          height="100"
          width="100"
          color="#2196F3"
          ariaLabel="triangle-loading"
          wrapperStyle={{ position: "absolute", top: "45%" }}
          visible={loading}
        />
      </div>
    );
  }
  if (user) {
    return <>{children}</>;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
};

export default PrivateRoute;
