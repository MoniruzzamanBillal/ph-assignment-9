import { createBrowserRouter } from "react-router-dom";
// import Root from "./Pages/Root";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetail from "../Pages/ServiceDetail";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        loader: () => fetch("/services.json"),
        // element: <ServiceDetail />,
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;