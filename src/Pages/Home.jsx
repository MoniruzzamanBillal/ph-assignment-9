import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import WhatOffer from "./WhatOffer";

const Home = () => {
  return (
    <div className="homeContainer w-[90%] md:w-[85%] m-auto   ">
      {/* banner component  */}
      <div className="bannerContainer  mb-10 pt-[3.7rem] ">
        <Banner />
      </div>
      {/* banner component  */}

      {/* service component  */}
      <div className="serviceContainer mb-10">
        <Services />
      </div>
      {/* service component  */}

      {/* what offer page  */}
      <div className="whatOffer mb-6">
        <WhatOffer />
      </div>
      {/* what offer page  */}
    </div>
  );
};

export default Home;
