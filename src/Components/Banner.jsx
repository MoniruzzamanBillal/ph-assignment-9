import React from "react";

const Banner = () => {
  const bannerStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };

  return (
    <div className="bannerContainer">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="images/banner/banner1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div class=" absolute transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gray-800 bg-opacity-70 w-full h-full"></div>

          {/* banner content  */}
          <div className=" bg-red-5000 text-center text-neutral-content absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="w-[80%] bg-blue-5000 m-auto ">
              <h1 className="mb-8 text-xl font-bold italic ">
                We are the Event Management Specialists
              </h1>
              <p className=" text-5xl font-semibold ">
                WE PERSONALIZE YOUR WEDDING EVENTS
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
          {/* banner content  */}
        </div>

        {/* slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="images/banner/banner2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div class=" absolute transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gray-800 bg-opacity-70 w-full h-full"></div>

          {/* banner content  */}
          <div className=" bg-red-5000 text-center text-neutral-content absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="w-[80%] bg-blue-5000 m-auto ">
              <h1 className="mb-8 text-xl font-bold italic ">
                Eternalize Your Moments: Celebrate Lasting Events!
              </h1>
              <p className=" text-5xl font-semibold ">
                CELEBRATE YOUR EVENTS THAT LASTS LONGER
              </p>
            </div>
          </div>
          {/* banner content  */}
        </div>
        {/* slider 2 */}

        {/* slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="images/banner/banner3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div class=" absolute transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gray-800 bg-opacity-70 w-full h-full"></div>

          {/* banner content  */}
          <div className=" bg-red-5000 text-center text-neutral-content absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="w-[80%] bg-blue-5000 m-auto ">
              <h1 className="mb-8 text-xl font-bold italic ">
                Wedding Inspiration and Supplier Recommendations for Your
                Special Day.
              </h1>
              <p className=" text-5xl font-semibold ">
                Genuine Wedding Experiences to Inspire Your Own Celebration,
                Along with Relevant Supplier References.
              </p>
            </div>
          </div>
          {/* banner content  */}
        </div>
        {/* slider 3 */}

        {/* slider 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="images/banner/banner4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div class=" absolute transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gray-800 bg-opacity-70 w-full h-full"></div>

          {/* banner content  */}
          <div className=" bg-red-5000 text-center text-neutral-content absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="w-[80%] bg-blue-5000 m-auto ">
              <h1 className="mb-8 text-xl font-bold italic ">
                Let’s Plan Your Next Event Together
              </h1>
              <p className=" text-5xl font-semibold ">
                We cordially invite you to collaborate with us in orchestrating
                your upcoming event to perfection.
              </p>
            </div>
          </div>
          {/* banner content  */}
        </div>
        {/* slider 4 */}
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Banner;
