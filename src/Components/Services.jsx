import React, { useContext, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { AppContext } from "../Context/Context";

const Services = () => {
  //   const [services, setServices] = useState([]);
  const { services } = useContext(AppContext);

  //   console.log(services);

  return (
    <div className="serviceContainer ">
      <div className="serviceWrapper   ">
        {/* service top  */}
        <h1 className="  text-3xl text-center mb-3 font-bold ">Our services</h1>

        <p className=" mb-6 w-[60%] m-auto text-3xl text-center font-semibold text-gray-600 ">
          We’ll make your next celebration very special!
        </p>

        {/* service top  */}

        {/* service card section  */}
        <div className="serviceCard  grid grid-cols-3 gap-x-6 gap-y-5 ">
          {services.map((ele, ind) => (
            <div key={ind}>
              <ServiceCard ele={ele} />
            </div>
          ))}
        </div>
        {/* service card section  */}
      </div>
    </div>
  );
};

export default Services;

// https://i.ibb.co/j42FM73/icons8-decoration-64.png
// https://i.ibb.co/MRB18WD/icons8-catering-64.png
// https://i.ibb.co/0VDW75p/icons8-entertainment-50.png
// https://i.ibb.co/pbz8Pgh/icons8-flower-bouquet-64.png
// https://i.ibb.co/TvRRZkY/icons8-gift-40.png
// https://i.ibb.co/k2KvVxW/icons8-photo-50.png
// https://i.ibb.co/BKtH4yx/icons8-venue-50.png

{
  /* <h1 className="  text-6xl text-center mb-3 font-bold ">
What we offer{" "}
</h1>

<p className=" mb-6 w-[60%] m-auto text-xl text-center font-semibold text-gray-600 ">
Each event and client is unique, and we believe our services should be
as well. We know what hiring a planner is all about!
</p> */
}
