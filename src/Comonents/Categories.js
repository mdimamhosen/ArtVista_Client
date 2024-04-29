import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../Assets_2/birmingham-museums-trust-zWE5pOLWkio-unsplash.jpg";
import img2 from "../Assets_2/photo-1581343109314-f7aa38b23ca2.avif";
import img3 from "../Assets_2/photo-1594136976553-38699ae9047c.avif";
import img4 from "../Assets_2/premium_photo-1664013263421-91e3a8101259.avif";
import img5 from "../Assets_2/photo-1611770363040-6c2e228232c7.avif";
import img6 from "../Assets_2/photo-1582201957428-5ff47ff7605c.avif";
import { NavLink } from "react-router-dom";
const Categories = () => {
  return (
    <div className="font-mono container mx-auto lg:py-6 py-3 mt-4">
      <div>
        <div className="    lg:text-3xl text-base font-bold text-center pt-3 md:pt-5  md:w-[70%] w-full mx-auto mb-6">
          <span>Best Selling Collection</span>
          <br />
          <p className="md:text-sm text-xs w-11/12 mx-auto ">
            Looking for an exclusive product, have a glance at our store.
          </p>
        </div>
        <div className="grid px-2  grid-cols-2  gap-4 md:grid-cols-3    ">
          <NavLink to="/landscape">
            <div
              className="
            flex justify-center  items-center"
            >
              <div class="max-w-sm bg-white w-full    rounded-lg shadow hover:scale-105 transition-all ease-linear duration-300 ">
                <a href="#">
                  <img
                    class="rounded-t-lg h-[200px] w-full  lg:h-[300px]  object-cover "
                    src={img1}
                    alt=""
                  />
                </a>
                <div class="   flex justify-center items-center">
                  <a
                    href="#"
                    class="  h-full w-full items-center block   text-sm font-medium text-center bg-amber-700 text-white   rounded-b-lg py-3 lg:text-lg hover:bg-amber-900 transition-all duration-300 ease-linear  focus:ring-4 focus:outline-none     "
                  >
                    LandScape Art
                  </a>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/potrait">
            <div
              className="
            flex justify-center items-center"
            >
              <div class="max-w-sm bg-white w-full  rounded-lg shadow hover:scale-105 transition-all ease-linear duration-300 ">
                <a href="#">
                  <img
                    class="rounded-t-lg h-[200px] lg:h-[300px] w-full object-cover "
                    src={img2}
                    alt=""
                  />
                </a>
                <div class="   flex justify-center items-center">
                  <a
                    href="#"
                    class="  h-full w-full items-center block   text-sm font-medium text-center bg-amber-700 text-white   rounded-b-lg py-3 lg:text-lg hover:bg-amber-900 transition-all duration-300 ease-linear  focus:ring-4 focus:outline-none     "
                  >
                    Potrait Drawing
                  </a>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/watercolor">
            <div
              className="
            flex justify-center items-center"
            >
              <div class="max-w-sm bg-white  w-full rounded-lg shadow hover:scale-105 transition-all ease-linear duration-300 ">
                <a href="#">
                  <img
                    class="rounded-t-lg h-[200px] lg:h-[300px] w-full object-cover "
                    src={img3}
                    alt=""
                  />
                </a>
                <div class="   flex justify-center items-center">
                  <a
                    href="#"
                    class="  h-full w-full items-center block   text-sm font-medium text-center bg-amber-700 text-white   rounded-b-lg py-3 lg:text-lg hover:bg-amber-900 transition-all duration-300 ease-linear  focus:ring-4 focus:outline-none     "
                  >
                    Watercolour Painting
                  </a>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/oil">
            <div
              className="
            flex justify-center items-center"
            >
              <div class="max-w-sm bg-white w-full   rounded-lg shadow hover:scale-105 transition-all ease-linear duration-300 ">
                <a href="#">
                  <img
                    class="rounded-t-lg h-[200px] lg:h-[300px] w-full object-cover "
                    src={img4}
                    alt=""
                  />
                </a>
                <div class="   flex justify-center items-center">
                  <a
                    href="#"
                    class="  h-full w-full items-center block   text-sm font-medium text-center bg-amber-700 text-white   rounded-b-lg py-3 lg:text-lg hover:bg-amber-900 transition-all duration-300 ease-linear  focus:ring-4 focus:outline-none     "
                  >
                    Oil Painting
                  </a>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/charcol">
            <div
              className="
            flex justify-center items-center"
            >
              <div class="max-w-sm bg-white w-full  rounded-lg shadow hover:scale-105 transition-all ease-linear duration-300 ">
                <a href="#">
                  <img
                    class="rounded-t-lg h-[200px] lg:h-[300px] w-full object-cover "
                    src={img5}
                    alt=""
                  />
                </a>
                <div class="   flex justify-center items-center">
                  <a
                    href="#"
                    class="  h-full w-full items-center block   text-sm font-medium text-center bg-amber-700 text-white   rounded-b-lg py-3 lg:text-lg hover:bg-amber-900 transition-all duration-300 ease-linear  focus:ring-4 focus:outline-none     "
                  >
                    Charcoal Sketching
                  </a>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/cartoon">
            <div
              className="
            flex justify-center items-center"
            >
              <div class="max-w-sm bg-white w-full  rounded-lg shadow hover:scale-105 transition-all ease-linear duration-300 ">
                <a href="#">
                  <img
                    class="rounded-t-lg h-[200px] lg:h-[300px] w-full object-cover "
                    src={img6}
                    alt=""
                  />
                </a>
                <div class="   flex justify-center items-center">
                  <a
                    href="#"
                    class="  h-full w-full items-center block   text-sm font-medium text-center bg-amber-700 text-white   rounded-b-lg py-3 lg:text-lg hover:bg-amber-900 transition-all duration-300 ease-linear  focus:ring-4 focus:outline-none     "
                  >
                    Cartoon Drawing
                  </a>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
