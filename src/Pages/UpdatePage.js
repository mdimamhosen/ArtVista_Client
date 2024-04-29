import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../ContextProvider/AppContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const UpdatePage = () => {
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/updateCraft/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          image: "",
          item_name: "",
          subcategory_Name: "",
          short_description: "",
          price: "",
          rating: "",
          stockStatus: "",
          processing_time: "",
          customization: "",
          user_email: "",
          user_name: "",
        });
        navigate(location?.state || "/mycraft");
      })
      .catch((err) => console.log(err));
  };
  const [art, setArt] = useState({});
  const { id } = useParams();
  console.log(art);
  useEffect(() => {
    fetch(`http://localhost:3001/art/${id}`)
      .then((res) => res.json())
      .then((data) => setArt(data))
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    setFormData({
      image: art.image || "",
      item_name: art.item_name || "",
      subcategory_Name: art.subcategory_Name || "",
      short_description: art.short_description || "",
      price: art.price || "",
      rating: art.rating || "",
      stockStatus: art.stockStatus || "",
      processing_time: art.processing_time || "",
      customization: art.customization || "",
      user_email: user?.email || "",
      user_name: user?.displayName || "",
    });
  }, [art, user]);
  React.useEffect(() => {
    document.title = "Update Item || ArtVIsta";
  });
  return (
    <div>
      <div className="mx-auto border border-amber-400 lg:w-1/2 w-11/12  p-6  rounded-lg py-5 my-5 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Item</h1>
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
                value={formData.item_name}
                defaultValue={art.item_name}
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
                defaultValue={art.subcategory_Name}
                value={formData.subcategory_Name}
                onChange={handleChange}
                className="mt-1 p-2 w-full  border-gray-300 border  outline-0 rounded-md      "
              >
                <option value="">Select Subcategory</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
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

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full mx-auto  bg-amber-800 text-white py-2 px-4 rounded-md   hover:bg-amber-900 focus:outline-none  "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
