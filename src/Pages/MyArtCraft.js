import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { CiHeart } from "react-icons/ci";
import Swal from "sweetalert2";
import { AppContext } from "../ContextProvider/AppContext";
import { Slide } from "react-awesome-reveal";
import { InfinitySpin } from "react-loader-spinner";

const AllArtCraft = () => {
  const [sixProducts, setSixProducts] = useState([]);
  const { user } = useContext(AppContext);
  const [formData, setFormData] = useState({
    subcategory_Name: "",
  });

  const email = user?.email;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://art-rho-flax.vercel.app/mydata?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setSixProducts(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/deleteCraft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const newProducts = sixProducts.filter(
              (product) => product._id !== id
            );
            setSixProducts(newProducts);
            setLoading(false);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ subcategory_Name: selectedCategory });

    if (selectedCategory === "All" || selectedCategory === "") {
      fetch(`http://localhost:3001/mydata?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setSixProducts(data);
          setLoading(false);
        });
      return;
    }
    fetch(
      `http://localhost:3001/myselecteddata?email=${email}&subcategory=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSixProducts(data);
      });
    console.log(selectedCategory);
  };
  React.useEffect(() => {
    document.title = "My List || ArtVIsta";
  });

  return (
    <div className="font-mono mt-5">
      <h1 className="text-center my-4 text-lg md:text-xl lg:text-3xl font-bold capitalize">
        My <span className="text-amber-700 ">Art&Craft</span> Items
      </h1>
      <div className="flex justify-center mb-4 items-center" action="">
        <div className="  ">
          <label
            htmlFor="subcategory_Name"
            className="block font-semibold text-lg  "
          >
            Search By Category
          </label>
          <select
            id="subcategory_Name"
            name="subcategory_Name"
            value={formData.subcategory_Name}
            onChange={handleCategoryChange}
            className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
          >
            <option value="">Select Category</option>
            <option value="All">All</option>
            <option value="Landscape Painting">Landscape Painting</option>
            <option value="Portrait Drawing">Portrait Drawing</option>
            <option value="Watercolour Painting">Watercolour Painting</option>
            <option value="Oil Painting">Oil Painting</option>
            <option value="Charcoal Sketching">Charcoal Sketching</option>
            <option value="Cartoon Drawing">Cartoon Drawing</option>
          </select>
        </div>
      </div>
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
      <Slide>
        <div className="grid py-5  container  mx-auto px-2  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
          {sixProducts.map((product, index) => (
            <div
              key={index}
              className=" border border-amber-400 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.item_name}
                className="w-full h-48 object-cover"
              />
              <div className=" py-2 px-[2px]">
                <h2 className="text-base lg:text-lg text-center   ">
                  {product.item_name}
                </h2>
                <div className="flex flex-col items-center gap-1 ">
                  <div className="flex  flex-col justify-center items-center">
                    {" "}
                    <p>
                      <span className="text-yellow-500">
                        {"★".repeat(Math.floor(product?.rating))}
                      </span>
                    </p>
                    <p className=" text-sm md:text-base font-semibold">
                      Price:${product.price}
                    </p>
                    <p className="">
                      <span className="text-amber-700">
                        {product?.stockStatus}
                      </span>
                    </p>
                    <p className="text-sm  font-semibold">
                      Customization:{" "}
                      <span className="font-thin">
                        {product?.customization || "Not available"}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <NavLink
                      to={`/art/${product._id}`}
                      className="bg-amber-700 rounded hover:bg-amber-800 transition-all ease-linear duration-200   text-white p-1  font-semibold focus:outline-none"
                    >
                      View Details
                    </NavLink>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-amber-700 rounded hover:bg-amber-800 transition-all ease-linear duration-200   text-white p-1  font-semibold focus:outline-none"
                    >
                      Delete
                    </button>
                    <NavLink
                      to={`/update/${product._id}`}
                      className="bg-amber-700 rounded hover:bg-amber-800 transition-all ease-linear duration-200   text-white p-1  font-semibold focus:outline-none"
                    >
                      Update
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default AllArtCraft;
