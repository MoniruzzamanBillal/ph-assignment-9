import React, { useEffect } from "react";
import HolidayPackage from "../Components/HolidayPackage";
import Aos from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="holidayPackage pt-[6rem] mb-10 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
      id="pricing"
      data-aos="zoom-in"
    >
      <HolidayPackage />
    </div>
  );
};

export default Pricing;
