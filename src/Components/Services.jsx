import React, { useContext, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { AppContext } from "../Context/Context";

const Services = () => {
  const { services } = useContext(AppContext);

  //   console.log(services);

  return (
    <div className="serviceContainer ">
      <div className="serviceWrapper   ">
        {/* service top  */}
        <h1 className=" text-xl sm:text-2xl lg:text-3xl text-center mb-3 font-bold ">
          Our services
        </h1>

        <p className=" mb-6  w-[85%] sm:w-[70%] md:w-[60%] m-auto text-xl sm:text-2xl lg:text-3xl text-center font-semibold text-gray-600 ">
          We’ll make your next celebration very special!
        </p>

        {/* service top  */}

        {/* service card section  */}
        <div className="serviceCard  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 ">
          {services.map((ele, ind) => (
            <div key={ind}>
              <ServiceCard key={ind} ele={ele} />
            </div>
          ))}
        </div>
        {/* service card section  */}
      </div>
    </div>
  );
};

export default Services;
