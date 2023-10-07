import React from "react";

const PackageCard = ({ ele }) => {
  return (
    <div className=" packageContainer   w-full flex flex-col justify-center items-center  ">
      {/* package top section  */}
      <div className="packageTop bg-gray-100 h-[10rem] rounded shadow-lg py-5 w-full flex flex-col justify-center items-center ">
        <h1 className="  text-2xl text-center font-semibold mb-3 ">
          {ele.name}
        </h1>

        <div className="priceSection flex justify-center items-center">
          <h1>From</h1>
          <h1 className=" text-2xl text-orange-400 font-bold ">${ele.price}</h1>
        </div>
      </div>
      {/* package top section  */}
    </div>
  );
};

export default PackageCard;
