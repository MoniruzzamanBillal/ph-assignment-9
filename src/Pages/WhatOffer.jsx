import React, { useEffect, useState } from "react";
import WhatOfferCard from "../Components/WhatOfferCard";

const WhatOffer = () => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch("/Offer.json");
      const responseData = await response.json();
      setOffer(responseData);
    };

    getItem();
  }, []);

  console.log(offer);

  return (
    <div className=" offerContainer  ">
      <div className="offerWrapper flex flex-col sm:flex-row sm:justify-between  ">
        {/* left side of offer  */}
        <div className="offerLeft order-2 sm:order-1  w-[100%] sm:w-[59%] lg:w-[58%] grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 ">
          {offer.map((ele, ind) => (
            <WhatOfferCard ele={ele} />
          ))}
        </div>
        {/* left side of offer  */}

        {/* right side of offer  */}
        <div className="offerRight order-1 sm:order-2 mb-8 sm:mb-0  w-[100%] sm:w-[39%] lg:w-[38%] ">
          {/* offer right top  */}
          <h1 className=" text-center sm:text-start text-5xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 w-full sm:w-[92%] md:w-[84%] lg:w-[78%] font-bold">
            What we offer
          </h1>
          {/* offer right top  */}

          {/* offer right bottom  */}
          <h1 className=" text-lg sm:text-base md:text-lg text-gray-600 font-semibold text-center sm:text-start ">
            Each event and client is unique, and we believe our services should
            be as well. We know what hiring a planner is all about!
          </h1>
          {/* offer right bottom  */}
        </div>

        {/* right side of offer  */}
      </div>
    </div>
  );
};

export default WhatOffer;
