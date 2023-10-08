import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AppProvider from "../Context/Context";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <AppProvider>
      <div className="rootContainer  ">
        {/* navbar component  */}
        <div className="navComponent  ">
          <NavBar />
        </div>
        {/* navbar component  */}

        {/* main component  */}
        <Outlet />
        {/* main component  */}

        {/* footer component  */}
        <div className="FooterComponent bg-blue-200   ">
          <Footer />
        </div>

        {/* footer component  */}
      </div>
    </AppProvider>
  );
};

export default Root;
