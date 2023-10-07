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
              <h1 className="mb-4 text-base sm:text-lg md:text-xl font-bold italic ">
                Let's have a party
              </h1>
              <p className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold ">
                It's time to celebrate
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
              <h1 className="mb-4 text-base sm:text-lg md:text-xl font-bold italic ">
                Let's have a party
              </h1>
              <p className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold ">
                We plan the best event
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
              <h1 className="mb-4  text-base sm:text-lg md:text-xl font-bold italic ">
                Let's have a party
              </h1>
              <p className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold ">
                Enjoy your celebration
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
              <h1 className="mb-4 text-base sm:text-lg md:text-xl font-bold italic ">
                Let’s Plan Your Next Event Together
              </h1>
              <p className=" text-lg sm:text-xl  md:text-3xl lg:text-5xl font-semibold ">
                We cordially invite you to collaborate with us in orchestrating
                your upcoming event to perfection.
              </p>
            </div>
          </div>
          {/* banner content  */}
        </div>
        {/* slider 4 */}
      </div>
    </div>
  );
};

export default Banner;
