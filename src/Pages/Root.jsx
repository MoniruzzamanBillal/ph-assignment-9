import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Root = () => {
  return (
    <div>
      {/* navbar component  */}
      <div className="navComponent bg-red-200">
        <NavBar />
      </div>
      {/* navbar component  */}

      <Outlet />
    </div>
  );
};

export default Root;
