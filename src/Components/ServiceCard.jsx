import React from "react";

const ServiceCard = ({ ele }) => {
  // console.log(ele);
  return (
    <div className="serviceCardContainer  ">
      <div className="cursor-pointer h-[32rem]  flex flex-col justify-between items-center  bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
        {/* card image  */}
        <div className="  h-[17rem] w-full ">
          <img class="rounded-t-lg w-full h-full" src={ele.image} alt="" />
        </div>
        {/* card image  */}

        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 ">
          {ele.name}
        </h5>
        <p className="font-normal px-2 text-center text-gray-600 mb-4 ">
          {ele.shortDescription}
        </p>

        <button className="bg-violet-500 mb-2 hover:bg-violet-600 px-5 py-2 rounded text-white font-semibold active:scale-95 ">
          See details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

// birthday
// https://i.ibb.co/hf4xqxw/sdfdsv.jpg

// https://i.ibb.co/4NDt3R3/chrismas.jpg
// https://i.ibb.co/xMGp8Kt/engagement.jpg
// https://i.ibb.co/cTjTCpZ/graduation.jpg
// https://i.ibb.co/gM0vm5q/retirementparty.jpg
// https://i.ibb.co/GVPyFfw/wedding.jpg