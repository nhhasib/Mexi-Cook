import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Chefs from "./Chefs";
import Description from "./Description";
import Reviews from "./Reviews";

const Main = () => {
  return (
    <div>
      <Banner></Banner>
      <Description></Description>
      <Chefs></Chefs>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Main;
