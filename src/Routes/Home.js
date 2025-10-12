import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Top from "../Components/Top header/Top";
import Slider from "../Components/Slider/Slider";
import Banner from "../Components/Banner/Banner";
import HomeProducts from "../Components/HomeProducts/HomeProducts"
import SingleBanner from "../Components/Single banner/SingleBanner";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts"
const Home = () => {
  return (
    <> 
      {window.screen.width > 800 && <Top/>}
      <Navbar/>
      <Slider/>
      <Banner/>
      <HomeProducts/>
      <SingleBanner/>
      <FeaturedProducts/>

      
    </>
  );
};

export default Home;
