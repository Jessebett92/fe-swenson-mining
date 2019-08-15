import React from "react";

import ProductFrame from "../products/pro-frame";
import HomeDesc from "../presentational/home-desc";

const Home = () => {
  return (
    <div className="home">
      <HomeDesc />
      <ProductFrame />
    </div>
  );
};

export default Home;
