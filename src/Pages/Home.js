import React from "react";
import Banner from "../Comonents/Banner";
import Categories from "../Comonents/Categories";
import Testimonials from "../Comonents/Testimonials";
import ShopByPrice from "../Comonents/ShopByPrice";
import AboutUs from "../Comonents/AboutUs";
import SixDataSection from "../Comonents/SixDataSection";

const Home = () => {
  React.useEffect(() => {
    document.title = "Home || ArtVIsta";
  });
  return (
    <div>
      <Banner />
      <SixDataSection />
      <Categories />
      <Testimonials />
      <ShopByPrice />
      <AboutUs />
    </div>
  );
};

export default Home;
