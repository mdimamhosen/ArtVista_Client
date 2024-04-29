import React, { useContext, useState } from "react";
import { AppContext } from "../ContextProvider/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddCraftItem = () => {
  const { user } = useContext(AppContext);
  const [formData, setFormData] = useState({
    image: "",
    item_name: "",
    subcategory_Name: "",
    short_description: "",
    price: "",
    rating: "",
    stockStatus: "",
    processing_time: "",
    customization: "",
    user_email: user?.email || "",
    user_name: user?.displayName || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://art-rho-flax.vercel.app/addCraft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to add craft item");
        }
      })
      .then((data) => {
        console.log(data);
        toast.success("Item added successfully");
        setFormData({
          image: "",
          item_name: "",
          subcategory_Name: "",
          short_description: "",
          price: "",
          rating: "",
          stockStatus: "",
          processing_time: "",
          user_email: user?.email || "",
          user_name: user?.displayName || "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    document.title = "Add Item || ArtVIsta";
  });

  return (
    <div className="mx-auto border border-amber-400 lg:w-1/2 w-11/12  p-6  rounded-lg py-5 my-5 shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Add A New Art & Craft Item
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-1 flex-col md:flex-row">
          <div className="  w-full">
            <label htmlFor="item_name" className="block font-medium  ">
              Item Name
            </label>
            <input
              type="text"
              id="item_name"
              name="item_name"
              placeholder="Enter Item Name"
              required
              value={formData.item_name}
              onChange={handleChange}
              className="mt-1 p-2 w-full   border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
          <div className=" w-full">
            <label htmlFor="subcategory_Name" className="block font-medium  ">
              Subcategory
            </label>
            <select
              id="subcategory_Name"
              name="subcategory_Name"
              value={formData.subcategory_Name}
              onChange={handleChange}
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            >
              <option value="">Select Subcategory</option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="short_description" className="block font-medium  ">
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            rows={1}
            required
            placeholder="Enter Short Description"
            className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
          />
        </div>
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="image" className="block font-medium  ">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              required
              placeholder="Enter Image URL"
              onChange={handleChange}
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
          <div className="w-full">
            <label htmlFor="price" className="block font-medium  ">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="rating" className="block font-medium  ">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              required
              placeholder="Enter Rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
          <div className="w-full">
            <label htmlFor="stockStatus" className="block font-medium  ">
              Stock Status
            </label>
            <select
              id="stockStatus"
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            >
              <option value="">Select Stock Status</option>
              <option value="In stock">In stock</option>
              <option value="Out of stock">Out of stock</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="processing_time" className="block font-medium  ">
              Processing Time
            </label>
            <input
              type="text"
              id="processing_time"
              name="processing_time"
              required
              placeholder="Enter Processing Time"
              value={formData.processing_time}
              onChange={handleChange}
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
          <div className="w-full">
            <label htmlFor="customization" className="block font-medium">
              Customization
            </label>
            <select
              id="customization"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            >
              <option value="">Customization</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="user_name" className="block font-medium  ">
              User Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Enter User Name"
              readOnly
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
          <div className="w-full">
            <label htmlFor="user_email" className="block font-medium  ">
              User Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Enter User Email"
              readOnly
              className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full mx-auto  bg-amber-800 text-white py-2 px-4 rounded-md   hover:bg-amber-900 focus:outline-none  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCraftItem;
