import React from "react";
import About from "./About";
import Ads from "./Ads";
import Categories from "./Categories";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      {/* <About /> */}
      <Slider />
      <Ads />
      <Categories />
    </div>
  );
};

export default Home;
