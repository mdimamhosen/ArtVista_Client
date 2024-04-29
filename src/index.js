import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./ContextProvider/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "react-tippy/dist/tippy.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
      {/* <Tooltip /> */}
    </BrowserRouter>
  </AppContextProvider>
);
