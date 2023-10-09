import React, { useEffect } from "react";
import WhatOffer from "./WhatOffer";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="whatOffer  pt-[8.5rem] mb-10 sm:mb-16 w-[95%] sm:w-[90%] md:w-[85%] m-auto"
      id="offer"
      data-aos="zoom-in"
    >
      <WhatOffer />
    </div>
  );
};

export default Offers;
