import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ques from "./Images/11.png";
import phone from "./Images/Group 1171275317.png";
import message from "./Images/Group 1171275318.png";
import location from "./Images/Group 1171275321.png";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="text-center mt-9 container px-2 mx-auto font-mono"
    >
      <h1 className="text-center font-bold text-xl md:text-3xl mb-2 md:mb-3">
        About Our <br />{" "}
        <span className="text-amber-800">ArtVista Art & Craft </span>Shop
      </h1>

      <p className="text-xs md:text-sm w-[95%] md:w-[70%] mx-auto mb-8">
        ArtVista Art & Craft Shop is a place where individuals gather to explore
        a vast collection of art and craft supplies, fostering creativity and
        passion for artistic expression. Our mission is to provide access to
        high-quality art and craft materials, catering to various interests and
        preferences.
      </p>
      <div
        id="questionSection"
        className="p-4   grid grid-cols-1 lg:grid-cols-2 my-4"
      >
        <div id="questionImg" className="grid-item md:p-4 lg:col-span-1">
          <img
            className="w-full lg:h-[400px] h-[250px] object-contain "
            src={ques}
            alt=""
          />
        </div>
        <div
          id="question"
          className="grid-item flex flex-col items-center justify-evenly lg:col-span-1"
        >
          <div className="collapse collapse-plus  text-left ">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Art & Craft Supplies
            </div>
            <div className="collapse-content text-left">
              <p className="text-left text-sm">
                "ArtVista Art & Craft Shop is a treasure trove of art and craft
                supplies, opening doors to endless possibilities of creative
                exploration and expression. It offers a sanctuary where artists
                and crafters can find inspiration, unleash their imagination,
                and bring their artistic visions to life."
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus  text-left ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Workshops & Classes
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                "In addition to providing art and craft materials, ArtVista Art
                & Craft Shop also offers workshops and classes for artists of
                all skill levels. These sessions provide valuable learning
                experiences, fostering creativity, skill development, and
                community engagement."
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus  text-left ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Creative Community
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                "ArtVista Art & Craft Shop serves as a hub for a vibrant
                creative community, where artists and crafters come together to
                share ideas, collaborate on projects, and celebrate the joy of
                making. It's a place where creativity thrives, friendships
                blossom, and artistic dreams take flight."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="form" className="text-center mt-10">
        <h1 className="text-center font-bold text-xl md:text-3xl mb-2 md:mb-3">
          Contact Us
        </h1>

        <p className="text-xs md:text-sm w-[95%] md:w-[70%] mx-auto mb-8">
          Have questions or suggestions? Feel free to reach out to us using the
          form below or contact us directly via phone or email.
        </p>
        <div id="formMain">
          <div className="grid grid-cols-1 md:grid-cols-2 pl-0 md:pl-1">
            <div className="grid-item text-left md:col-span-1 flex flex-col justify-evenly  p-4">
              <div className="w-full    rounded-xl flex flex-col items-start justify-center gap-2 p-6 bg-[#bced6e1a]">
                <img className="w-[30px] h-[30px]" src={phone} alt="" />
                <p className="text-xs md:text-sm text-gray-600">Phone Number</p>
                <h2 className="text-xl md:text-xl font-bold">
                  (+880) 1799-532172
                </h2>
              </div>
              <div className="my-3 w-full    rounded-xl flex flex-col items-start justify-center gap-2 p-6 bg-[#fddb5f1a]">
                <img className="w-[30px] h-[30px]" src={message} alt="" />
                <p className="text-xs md:text-sm text-gray-600">
                  Email: artvista@example.com
                </p>
                <h2 className="text-xl md:text-xl font-bold">
                  (+62) 123-321-546
                </h2>
              </div>
              <div className="w-full    flex rounded-xl flex-col items-start justify-center gap-2 p-6 bg-[#629cf31a]">
                <img className="w-[30px] h-[30px]" src={location} alt="" />
                <p className="text-xs md:text-sm text-gray-600">Location</p>
                <h2 className="text-xl md:text-xl font-bold">
                  {" "}
                  152/1 Mohakhali Wireless Gate
                </h2>
              </div>
            </div>
            <div
              id="mainForm"
              className="grid-item flex items-center justify-center text-left md:col-span-1"
            >
              <form className="w-full pl-0 md:pl-2 gap-4">
                <div className="flex flex-wrap md:-mx-3 sm:mx-1 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide   text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Your Name"
                    />
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide   text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700    -gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus: -gray-500"
                      id="grid-last-name"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide   text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Subject
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700    -gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus: -gray-500"
                      id="grid-last-name"
                      type="email"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap md:-mx-3 sm:mx-1 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Message
                    </label>
                    <textarea
                      cols="30"
                      rows="10"
                      className="appearance-none block w-full bg-gray-200 text-gray-700    -gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus: -gray-500"
                      id="grid-last-name"
                      type="email"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap md:-mx-3 sm:mx-1 mb-6">
                  <div className="w-full px-3">
                    <button className="btn w-full bg-amber-800 text-white font-bold text-2xl">
                      Submit Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
