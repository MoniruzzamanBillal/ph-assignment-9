import React from "react";

const ServiceCard = ({ ele }) => {
  //   console.log(ele);
  return (
    <div className="serviceCardContainer  ">
      <div className="cursor-pointer h-[15rem] flex flex-col justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
        {/* card icon  */}
        <div className=" mb-3 w-[2.5rem] ">
          <img src={ele.icon} alt="" className="w-full h-full" />
        </div>
        {/* card icon  */}

        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 ">
          {ele.name}
        </h5>
        <p className="font-normal text-center text-gray-600 mb-4 ">
          {ele.shortDescription}
        </p>

        <button className="bg-violet-500 hover:bg-violet-600 px-5 py-2 rounded text-white font-semibold active:scale-95 ">
          See details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
