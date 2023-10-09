import React from "react";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ ele }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/detail/${id}`);
  };

  // console.log(ele);

  return (
    <div
      className=" packageContainer  cursor-pointer transform hover:-translate-y-2 duration-300 hover:shadow-md  w-full flex flex-col justify-center items-center  "
      onClick={() => handleNavigate(ele.id)}
    >
      <div className="packageTop bg-blue-100 h-[10rem] rounded-t-md drop-shadow-md py-5 w-full flex flex-col justify-center items-center ">
        <h1 className="  text-2xl text-center font-semibold mb-3 ">
          {ele.name}
        </h1>

        <div className="priceSection flex justify-center items-center">
          <h1>From</h1>
          <h1 className=" text-2xl text-orange-400 font-bold ">${ele.price}</h1>
        </div>
      </div>
      {/* package top section  */}

      {/* package bottom section  */}
      <div className="cardBottom w-full h-[12rem] rounded-b-md flex flex-col justify-center items-center bg-gray-100 pt-3 pb-5 text-base text-gray-800 font-semibold  ">
        <h1 className="mb-1">{ele.hour} Hours</h1>
        <h1 className="mb-1">Up to {ele.person} persons</h1>
        <h1 className="mb-1">{ele.includ1 ? ele.includ1 : ""} </h1>
        <h1 className="mb-1">{ele.includ2 ? ele.includ2 : ""} </h1>
        <h1 className="mb-1">{ele.includ3 ? ele.includ3 : ""} </h1>
        <h1>{ele.includ4 ? ele.includ4 : ""} </h1>
      </div>
      {/* package bottom section  */}
    </div>
  );
};

export default PackageCard;
