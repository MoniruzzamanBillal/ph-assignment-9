import React from "react";
import Team from "../Components/Team";

const About = () => {
  return (
    <div className="aboutUs  pt-[6.5rem] mb-10 m-auto">
      {/* about top section  */}
      <div className="aboutTop mb-8  w-[95%] sm:w-[90%] md:w-[85%] m-auto ">
        <h1 className=" mb-5 text-2xl sm:text-3xl md:text-4xl text-center font-bold">
          We Create Events That Lasts{" "}
        </h1>

        <p className="  text-sm sm:text-base md:text-xl text-center text-gray-800 w-[80%] m-auto ">
          From Wedding Functions to Birthday Parties or Corporate Events to
          Musical Functions, We offer full range of Events Management Services
          that scale to your needs & budget.
        </p>

        {/* card container  */}
        <div className="cardContainer mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
          {/* vision card  */}
          <div className="vission ">
            <div className=" bg-gray-50 border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg"
                  src="/images/Services/birthday.jpg"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
                    Our Vision
                  </h5>
                </div>
                <p className=" text-center font-normal text-gray-700 ">
                  We envision simplifying event management through user-friendly
                  tools, fostering creativity, and ensuring every event is a
                  memorable success.
                </p>
              </div>
            </div>
          </div>
          {/* vision card  */}

          {/* approach  card  */}
          <div className="approach ">
            <div className=" bg-gray-50 border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg"
                  src="/images/Services/graduation.jpg"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
                    Our Approach
                  </h5>
                </div>
                <p className=" text-center font-normal text-gray-700 ">
                  We prioritize user-friendly design and innovation to simplify
                  event planning, empowering users with creative and reliable
                  solutions.
                </p>
              </div>
            </div>
          </div>
          {/* approach  card  */}

          {/* goal  card  */}
          <div className="goal ">
            <div className=" bg-gray-50 border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg"
                  src="/images/Services/wedding.jpg"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
                    Our Goal
                  </h5>
                </div>
                <p className=" text-center font-normal text-gray-700 ">
                  We aim to develop an intuitive event app that simplifies
                  planning, ignites creativity, and guarantees event success,
                  empowering users to effortlessly craft memorable experiences.
                </p>
              </div>
            </div>
          </div>
          {/* goal  card  */}

          {/*  */}
        </div>

        {/* card container  */}
      </div>
      {/* about top section  */}

      {/* about bottom section  */}
      <div className="aboutBottom   ">
        <Team />
      </div>
      {/* about bottom section  */}
    </div>
  );
};

export default About;
