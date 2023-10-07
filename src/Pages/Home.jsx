import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div className="homeContainer w-[85%] m-auto   ">
      {/* banner component  */}
      <div className="bannerContainer  mb-4 pt-[3.7rem] ">
        <Banner />
      </div>
      {/* banner component  */}

      {/* service component  */}
      <div className="serviceContainer">
        <Services />
      </div>
      {/* service component  */}
    </div>
  );
};

export default Home;
