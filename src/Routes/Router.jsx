import { createBrowserRouter } from "react-router-dom";
// import Root from "./Pages/Root";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetail from "../Pages/ServiceDetail";
import PrivateRoute from "./PrivateRoute";

import Offers from "../Pages/Offers";
import Pricing from "../Pages/Pricing";
import About from "../Pages/About";
import ServicePage from "../Pages/ServicePage";

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
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/offer",
        element: <Offers />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
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
