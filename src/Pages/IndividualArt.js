import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaHeart,
  FaTelegram,
  FaShoppingBasket,
  FaTelegramPlane,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPaperPlaneOutline } from "react-icons/io5";

const IndividualArt = () => {
  const [art, setArt] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://art-rho-flax.vercel.app/art/${id}`)
      .then((res) => res.json())
      .then((data) => setArt(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="grid w-11/12 mx-auto grid-cols-1 lg:grid-cols-2 gap-4 py-10 font-mono">
      <div>
        <img
          src={art?.image}
          alt=""
          className="w-full h-full object-cover"
          style={{ aspectRatio: "16/9" }}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{art?.item_name}</h2>
        <p className="text-lg mb-2">{art?.subcategory_Name}</p>
        <p className="text-gray-600 mb-4">{art?.short_description}</p>
        <div className="flex items-center mb-4 gap-2">
          {/* <span className="mr-2">{art?.rating}</span> */}
          <span className="text-yellow-500">
            {"★".repeat(Math.floor(art?.rating))}
          </span>
          <span className="text-sm text-gray-500"> 49 reviews</span>
        </div>
        <p className="text-lg font-bold mb-2">Price: ${art?.price}</p>
        <p className="mb-2">
          {art?.stockStatus === "Out of stock" ? (
            <span className="text-red-500">{art?.stockStatus}</span>
          ) : (
            <span className="text-amber-700">{art?.stockStatus}</span>
          )}
        </p>
        <p className="text-sm mb-1 font-semibold">
          Processign time:{" "}
          <span className="font-thin">{art?.processing_time}</span>
        </p>
        <p className="text-sm mb-4 font-semibold">
          Customization: <span className="font-thin">{art?.customization}</span>
        </p>
        <p className="text-sm font-semibold mb-1">
          Seller: <span className="font-thin">{art?.user_name}</span>
        </p>
        <p className="text-sm font-semibold mb-4">
          Contact Info: <span className="font-thin">{art?.user_email}</span>
        </p>
        <div className="flex items-center mb-4 font-semibold">
          <button className="mr-4  flex items-center text-sm gap-1 ">
            <CiHeart /> Add to Wishlist
          </button>
          <button className="mr-4  flex items-center text-sm gap-1 ">
            <IoPaperPlaneOutline /> Delivery&Returns
          </button>
          <button className="mr-4  flex items-center text-sm gap-1 ">
            <FaShoppingBasket />
            Offers
          </button>
        </div>
        <div className="flex items-center">
          <button className="bg-amber-800 hover:bg-amber-900 transition-all ease-linear duration-300  text-white font-bold px-4 py-2 rounded  mr-2">
            Add to Cart
          </button>
          <button className="bg-amber-800 hover:bg-amber-900 transition-all ease-linear duration-300   font-bold text-white  px-4 py-2 rounded ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualArt;
