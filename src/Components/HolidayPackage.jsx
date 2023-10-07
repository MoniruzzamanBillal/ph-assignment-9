import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import PackageCard from "./PackageCard";

const HolidayPackage = () => {
  const { services } = useContext(AppContext);

  //   console.log(services);

  return (
    <div className=" holidayPackageContainer   ">
      <div className="holidayPackageWrapper   ">
        <h1 className="  mb-2 text-lg sm:text-xl text-center font-semibold ">
          Choose your holiday
        </h1>
        <h1 className=" mb-5 text-2xl sm:text-3xl md:text-4xl text-center font-bold ">
          Our Events Packages
        </h1>

        {/* package card  */}

        <div className="packageCard  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-5  ">
          {services.map((ele, ind) => (
            <PackageCard key={ind} ele={ele} />
          ))}
        </div>

        {/* package card  */}
      </div>
    </div>
  );
};

export default HolidayPackage;
