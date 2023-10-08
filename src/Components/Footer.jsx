import React from "react";

import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" footerContainer  w-[96%] sm:w-[90%] m-auto ">
      <footer class="relative  py-3">
        <div class="container mx-auto ">
          <div class="flex flex-col md:flex-row  ">
            {/* left side of footer  */}

            <div class="  w-[96%] sm:w-[80%] md:w-[50%] m-auto px-4 mb-3 md:mb-0 ">
              <h4 class="text-3xl font-semibold mb-3">Let's keep in touch!</h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6 flex text-3xl gap-3  ">
                <AiFillTwitterCircle className="text-blue-800 hover:scale-105" />
                <AiFillGithub className="text-gray-800 hover:scale-105" />
                <AiFillInstagram className="text-orange-700 hover:scale-105" />
                <BsFacebook className="text-blue-700 hover:scale-105" />
              </div>
            </div>
            {/* left side of footer  */}

            {/* right side of footer  */}
            <div class=" w-[96%] sm:w-[80%] md:w-[50%] m-auto px-4  ">
              <div class="flex justify-evenly ">
                <div class="">
                  <span class="block uppercase text-blueGray-500 text-lg font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        Home
                      </a>
                    </li>
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="">
                  <span class="block uppercase text-blueGray-500 text-lg font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a class="text-blue-800 hover:text-blue-900 font-semibold block pb-2 text-sm  cursor-pointer hover:scale-105 hover:shadow-sm">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* right side of footer  */}
          </div>
          <hr class="my-4 border-blueGray-300" />

          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                © Copyright Billal.Developed by Moniruzzaman Billal.All Rights
                Reserved. .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
