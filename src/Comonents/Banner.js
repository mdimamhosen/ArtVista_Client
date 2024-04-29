import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "tailwindcss/tailwind.css";
import { NavLink } from "react-router-dom";

import img1 from "../Assets/premium_photo-1673514503540-9538.png";
import img2 from "../Assets/premium_photo-1673514502997-d685.png";
import img3 from "../Assets/photo-1477647966959-5a95d41d625a.png";
import img4 from "../Assets/premium_photo-1673514503551-82b1.png";
import img5 from "../Assets/photo-1590853566724-83bc9da30d15.png";
import img6 from "../Assets/photo-1578926375605-eaf7559b1458.png";
import img7 from "../Assets/photo-1459908676235-d5f02a50184b.png";
import img8 from "../Assets/photo-1507010444286-828ea71bfac7.png";
import { AppContext } from "../ContextProvider/AppContext";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const priceTags = ["$100,000", "$200,000", "$300,000", "$400,000", "$500,000"];
const locations = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"];
const propertyTypes = [
  "Acrelic Paint",
  "Oil Paint",
  "Charcoal Sketching",
  "Watercolour Painting",
  "Portrait Drawing",
  "Landscape Painting",
  "Acrelic Paint",
  "Oil Paint",
];
const headings = [
  "Luxury Crafts",
  "Artistic Views",
  "Crafty Oasis",
  "Modern Crafts",
  "Exceptional Artistry",
  "Creative Retreat",
  "Elegant Crafts",
  "Modern Artistry",
];
const descriptions = [
  "Explore our collection of luxurious and high-quality craft items.",
  "Experience breathtaking views with our artistic creations.",
  "Find your own crafty oasis with our unique and inspiring pieces.",
  "Discover modern crafts that redefine creativity and innovation.",
  "Experience exceptional artistry with our handcrafted masterpieces.",
  "Unleash your creativity and find inspiration in our creative retreat.",
  "Add elegance to your space with our carefully curated craft items.",
  "Embrace modern artistry with our contemporary and stylish creations.",
];

export default function Banner() {
  const { themeOvserve } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center">
      <div id="appSlider" className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="w-full h-[70vh]  ">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover relative "
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-60"></div>
              <div className="absolute font-mono top-[35%] gap-2 transition-all duration-500 ease-linear lg:gap-4 flex flex-col justify-center items-center space-y-3  w-full left-1/2   -translate-x-1/2 -translate-y-1/2">
                <h1
                  className={
                    themeOvserve
                      ? `  text-center  transition-all duration-500 ease-linear text-3xl lg:text-5xl font-bold  text-amber-600`
                      : `text-white text-center  transition-all duration-500 ease-linear text-3xl lg:text-5xl font-bold  `
                  }
                >
                  {headings[index]}
                </h1>
                <p
                  className={
                    themeOvserve === false
                      ? `text-center text-white text-md lg:text-lg`
                      : `text-center text-amber-600  text-md lg:text-lg`
                  }
                >
                  {descriptions[index]}
                </p>
                <NavLink
                  to="/allartcraft"
                  className="text-center bg-amber-800  transition-all duration-500 ease-linear text-white font-bold py-2 px-3 rounded-md hover:bg-amber-900"
                >
                  View All Art&Craft
                </NavLink>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="bg-gray-600 bg-opacity-80 p-2 font-mono rounded-lg mt-2 ">
                  <p className="text-sm md:text-lg font-bold   ">
                    <span>Type:</span>{" "}
                    <span
                      className={themeOvserve ? "text-amber-600" : "text-white"}
                    >
                      {propertyTypes[index]}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
