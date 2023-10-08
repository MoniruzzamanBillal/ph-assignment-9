import React from "react";
import TeamCard from "./TeamCard";

const teamMember = [
  {
    id: 0,
    img: "https://i.ibb.co/6DQKmfP/event-org-img2.png",
    name: "nazrul",
  },
  {
    id: 1,
    img: "https://i.ibb.co/zbXdVhT/event-org-img1.png",
    name: "Sara",
  },
  {
    id: 2,
    img: "https://i.ibb.co/3rHCrkR/event-org-img3.png",
    name: "Rakib",
  },
  {
    id: 3,
    img: "https://i.ibb.co/jWLSctf/event-org-img4.png",
    name: "Nora",
  },
];

const Team = () => {
  return (
    <div className="teamContainer bg-blue-50 p-1  ">
      <div className="teamWrapper w-[96%] sm:w-[92%] md:w-[88%] m-auto flex flex-col md:flex-row justify-between items-center ">
        {/* team left side  */}
        <div className="teamLeft  w-[98%] md:w-[56%]  mb-6 md:mb-0 ">
          <div className="teamLeftWrapper b text-center flex flex-col justify-center items-center ">
            {/* team left image  */}
            <div className="logoImg  mb-3 w-[4rem] md:w-[4.5rem] lg:w-[5rem] ">
              <img src="/public/logo.png" className="w-full h-full" alt="" />
            </div>
            {/* team left image  */}

            {/* team left top  */}
            <h1 className="  text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4  font-bold">
              Meet the Team Behind the Magic! 🌟
            </h1>
            {/* team left top  */}

            {/* team left bottom  */}
            <h1 className="  w-[94%] sm:w-[90%] lg:w-[85%] text-sm sm:text-base md:text-lg m-auto text-gray-800 font-semibold text-center leading-6 md:leading-7 lg:leading-8 ">
              Our team is a dynamic mix of industry experts, creative minds, and
              event enthusiasts who share a common goal: to make your event a
              resounding success.our organizers are committed to curating an
              event that will leave you inspired and thrilled.
            </h1>
            {/* team left bottom  */}
          </div>
        </div>
        {/* team left side  */}

        {/* team right section  */}
        <div className="teamRight  w-[98%] md:w-[43%] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-2 sm:gap-3 m-auto ">
          {teamMember.map((ele, ind) => (
            <TeamCard ele={ele} />
          ))}
        </div>
        {/* team right section  */}
      </div>
    </div>
  );
};

export default Team;

// https://i.ibb.co/jWLSctf/event-org-img4.png
// https://i.ibb.co/6DQKmfP/event-org-img2.png
// https://i.ibb.co/3rHCrkR/event-org-img3.png
// https://i.ibb.co/zbXdVhT/event-org-img1.png
