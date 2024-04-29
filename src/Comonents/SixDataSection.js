import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { CiHeart } from "react-icons/ci";
import { Slide } from "react-awesome-reveal";
import { InfinitySpin } from "react-loader-spinner";

const SixDataSection = () => {
  const [sixProducts, setSixProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://art-rho-flax.vercel.app/sixData")
      .then((res) => res.json())
      .then((data) => {
        setSixProducts(data.slice(0, 8));
        setLoading(false);
      });
  }, []);
  return (
    <div className="font-mono pt-5 mt-5">
      {loading && (
        <>
          <div className="w-screen h-screen flex justify-center items-center ">
            <InfinitySpin
              visible={true}
              width="200"
              color="#FFBF00"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        </>
      )}
      <h1 className="lg:text-3xl text-base font-bold text-center md:w-[70%] w-full mx-auto mb-3">
        <span className="text-amber-700">Bangladesh's Largest </span> <br />
        <Typewriter
          words={[
            "Online Art & Craft Store",
            "Discover Your Creative Potential",
            "Explore Unique Handcrafted Items",
            "Connect with Artisans Worldwide",
            "Bring Your Creativity With Us",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <h1 className="text-center text-lg md:text-xl lg:text-3xl font-bold">
        See Our Top <span className="text-amber-700 ">Products</span>
      </h1>
      <div className="grid py-5  container  mx-auto px-2  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
        {sixProducts.map((product, index) => (
          <Slide
            key={index}
            cascade
            triggerOnce
            className="border border-amber-400 rounded-lg shadow-md overflow-hidden"
          >
            <div>
              <img
                src={product.image}
                alt={product.item_name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="py-2 px-[2px]">
                <h2 className="text-base lg:text-lg text-center">
                  {product.item_name}
                </h2>
                <div className="flex justify-center items-center w-full flex-col">
                  <p>
                    <span className="text-yellow-500">
                      {"★".repeat(Math.floor(product?.rating))}
                    </span>
                  </p>
                  <p className=" ">
                    <span className="text-amber-700">
                      {product?.stockStatus}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm md:text-base font-semibold">
                    Price: ${product.price}
                  </p>
                  <div className="flex items-center space-x-2">
                    <NavLink
                      to={`/art/${product._id}`}
                      className="bg-amber-700 hover:bg-amber-800 transition-all ease-linear duration-200 text-white p-1 font-semibold focus:outline-none"
                    >
                      View Details
                    </NavLink>
                    <button className="bg-amber-700 text-white p-[6px] border hover:bg-amber-800 transition-all ease-linear duration-200 border-amber-700 focus:outline-none">
                      <CiHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
      <div className="flex w-screen justify-center items-center pb-3">
        <button>
          <NavLink
            to="/allartcraft"
            className="block   mx-auto bg-amber-700 hover:bg-amber-800 transition-all ease-linear duration-200   text-white p-2 rounded font-semibold
             mt-5"
          >
            View All Products
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default SixDataSection;
