import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import WhatOffer from "./WhatOffer";
import HolidayPackage from "../Components/HolidayPackage";
import Team from "../Components/Team";
import LoadingScleton from "../Components/LoadingScleton";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

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
        data-aos="fade-right"
      >
        <Services />
      </div>
      {/* service component  */}

      {/* what offer page  */}
      <div
        className="whatOffer mb-10 sm:mb-16 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
        id="offer"
        data-aos="fade-left"
      >
        <WhatOffer />
      </div>
      {/* what offer page  */}

      {/* holiday package container  */}
      <div
        className="holidayPackage mb-10 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
        id="pricing"
        data-aos="zoom-in-up"
      >
        <HolidayPackage />
      </div>
      {/* holiday package container  */}

      {/* team component  */}
      <div className="teamComponent mb-6 " id="about" data-aos="zoom-in">
        <Team />
      </div>
      {/* team component  */}

      {/*  */}
    </div>
  );
};

export default Home;
