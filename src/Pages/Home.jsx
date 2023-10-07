import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import WhatOffer from "./WhatOffer";
import HolidayPackage from "../Components/HolidayPackage";

const Home = () => {
  return (
    <div className="homeContainer w-[95%] sm:w-[90%] md:w-[85%] m-auto   ">
      {/* banner component  */}
      <div className="bannerContainer  mb-12 pt-[3.8rem] ">
        <Banner />
      </div>
      {/* banner component  */}

      {/* service component  */}
      <div className="serviceContainer mb-20">
        <Services />
      </div>
      {/* service component  */}

      {/* what offer page  */}
      <div className="whatOffer mb-10 sm:mb-16">
        <WhatOffer />
      </div>
      {/* what offer page  */}

      {/* holiday package container  */}
      <div className="holidayPackage mb-10">
        <HolidayPackage />
      </div>
      {/* holiday package container  */}
    </div>
  );
};

export default Home;
