import React from "react";
import About from "./About";
import Ads from "./Ads";
import Auctions from "./Auctions";
import Categories from "./Categories";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      {/* <About /> */}
      <Slider />
      <Ads />
      <Categories />
      <Auctions />
    </div>
  );
};

export default Home;
