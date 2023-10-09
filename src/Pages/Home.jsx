import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import WhatOffer from "./WhatOffer";
import HolidayPackage from "../Components/HolidayPackage";
import Team from "../Components/Team";
import LoadingScleton from "../Components/LoadingScleton";

const Home = () => {
  return (
    <div className="homeContainer  ">
      {/* banner component  */}
      <div className="bannerContainer  mb-12 pt-[5.2rem] w-[95%] sm:w-[90%] md:w-[85%] m-auto ">
        <Banner />
      </div>
      {/* banner component  */}

      {/* service component  */}
      <div
        className="serviceContainer mb-20 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
        id="service"
      >
        <Services />
      </div>
      {/* service component  */}

      {/* what offer page  */}
      <div
        className="whatOffer mb-10 sm:mb-16 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
        id="offer"
      >
        <WhatOffer />
      </div>
      {/* what offer page  */}

      {/* holiday package container  */}
      <div
        className="holidayPackage mb-10 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
        id="pricing"
      >
        <HolidayPackage />
      </div>
      {/* holiday package container  */}

      {/* team component  */}
      <div className="teamComponent mb-6 " id="about">
        <Team />
      </div>
      {/* team component  */}

      {/*  */}
    </div>
  );
};

export default Home;
