import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [existData, setExistData] = useState([]);

  const { id } = useParams();

  const responseData = useLoaderData();

  useEffect(() => {
    const filter = responseData.find((ele) => ele.id === id);

    if (filter) {
      setExistData(filter);
    }
  }, []);

  console.log(existData);

  return (
    <div className=" serviceDetailContainer   ">
      <div className="serviceDetailWrapper  mb-12 pt-[5rem] w-[95%] sm:w-[90%] md:w-[85%] m-auto ">
        {/*  */}
        <div
          style={{
            backgroundImage: `url("${existData?.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50rem",
          }}
        >
          <div class="w-full h-full flex flex-col justify-center py-5 px-4  backdrop-brightness-50 ">
            <span class="text-white text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10 font-bold ">
              Welcome to Evenator
            </span>

            {/* description 1  */}
            <h1 className=" mb-7 w-[100%] sm:w-[96%] md:w-[90%] lg:w-[85%] text-base sm:text-lg md:text-xl text-gray-100 ">
              {existData.description1}
            </h1>
            {/* description 1  */}

            {/*  */}

            {/* description 2  */}
            <h1 className=" mb-9 w-[100%] sm:w-[96%] md:w-[90%] lg:w-[85%] text-base sm:text-lg md:text-xl text-gray-100 ">
              {existData.description2}
            </h1>
            {/* description 2  */}

            {/* offers  */}
            <div className="offers text-gray-100 mb-5 md:mb-7 ">
              <h1 className=" font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 ">
                What we Offers:
              </h1>
              <h1 className=" text-sm sm:text-base md:text-lg mb-1 font-semibold ">
                {" "}
                {existData?.includ1 ? existData.includ1 : ""}
              </h1>
              <h1 className=" text-sm sm:text-base md:text-lg mb-1 font-semibold ">
                {" "}
                {existData?.includ2 ? existData.includ2 : ""}
              </h1>
              <h1 className=" text-sm sm:text-base md:text-lg  mb-1 font-semibold ">
                {" "}
                {existData?.includ3 ? existData.includ3 : ""}
              </h1>
              <h1 className=" text-sm sm:text-base md:text-lg  mb-1 font-semibold ">
                {" "}
                {existData?.includ4 ? existData.includ4 : ""}
              </h1>
            </div>
            {/* offers  */}

            {/* price section  */}

            <div className="priceSection mt-2 mb-6 md:mb-7 text-base md:text-xl text-gray-100 ">
              <h1>
                We arrange your event at affordible price starting{" "}
                <span className=" font-bold ">{existData.price}$</span>{" "}
              </h1>
            </div>

            {/*  */}
            <div className="hireButton flex justify-center  ">
              <button className="  m-auto text-center text-white font-semibold py-2 px-6 rounded bg-violet-600 hover:bg-violet-700 hover:shadow-md active:scale-95 ">
                Hire us{" "}
              </button>
            </div>
            {/*  */}

            {/* price section  */}
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ServiceDetail;
