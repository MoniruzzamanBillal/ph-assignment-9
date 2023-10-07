import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AppProvider from "../Context/Context";

const Root = () => {
  return (
    <AppProvider>
      <div className="rootContainer mb-3  ">
        {/* navbar component  */}
        <div className="navComponent bg-green-500  ">
          <NavBar />
        </div>
        {/* navbar component  */}

        <Outlet />
      </div>
    </AppProvider>
  );
};

export default Root;
