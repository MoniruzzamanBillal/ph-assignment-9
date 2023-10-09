import React, { useEffect } from "react";
import Services from "../Components/Services";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="serviceContainer pt-[5.3rem] mb-20 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
      id="service"
      data-aos="zoom-in"
    >
      <Services />
    </div>
  );
};

export default ServicePage;
