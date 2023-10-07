import React from "react";

const WhatOfferCard = ({ ele }) => {
  return (
    <div className="  flex flex-col justify-center items-center ">
      {/* top section  */}
      <div className="offerCardTop p-1 bg-gray-200 w-[4rem] h-[4rem] sm:w-[3rem] sm:h-[3rem] md:w-[3.8rem] md:h-[3.8rem] lg:w-[5rem] lg:h-[5rem] flex justify-center items-center self-center rounded-full ">
        <img src={ele.icon} className=" w-[70%] h-[70%] " />
      </div>
      {/* top section  */}

      {/* bottom section  */}
      <div className="bottomSection text-xl sm:text-base lg:text-lg font-semibold ">
        <h1> {ele.name} </h1>
      </div>
      {/* bottom section  */}
    </div>
  );
};

export default WhatOfferCard;
