import { createBrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

export default Router;
