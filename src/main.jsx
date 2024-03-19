import React from "react";
import ReactDOM from "react-dom/client";
import Router from "../Router/Router.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./dark-mode.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={Router} />
  </>
);
