import React from "react";
import { Slide } from "react-awesome-reveal";
import { CiHeart } from "react-icons/ci";
import { InfinitySpin } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const Landscape = () => {
  const [allcategory, setAllCategory] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://art-rho-flax.vercel.app/allcategory")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter(
          (item) => item.subcategory_Name === "Watercolour Painting"
        );
        setAllCategory(newData);
        setloading(false);
      });
  }, []);
  return (
    <div className="font-mono mt-5">
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
      <h1 className="text-center text-lg md:text-xl lg:text-3xl font-bold capitalize">
        All of our <span className="text-amber-700 ">Watercolor Art</span>
      </h1>
      <div className="grid py-5  container  mx-auto px-2  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
        {allcategory.map((product, index) => (
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
                      to={`/allcateroy/${product._id}`}
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
    </div>
  );
};

export default Landscape;
