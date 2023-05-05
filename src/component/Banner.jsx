import React from "react";
import img1 from "../images/plate-with-nachos-amidst-mexican-food.jpg";
import img2 from "../images/mexican-kitchen.jpg";
import img3 from "../images/mexican-tacos-with-beef-tomato-sauce-salsa.jpg"

const Banner = () => {
  return (
    <div className="mt-4">
      <div className="carousel w-11/12 mx-auto text-center">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="bg-black">
            <img src={img3} className="w-full opacity-60" />
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-white font-bold w-4/5 text-4xl md:text-6xl">Welcome to Mexican foods</h1>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="bg-black">
            <img src={img1} className="w-full opacity-60" />
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-white font-bold text-2xl md:text-4xl w-4/5">Spice up your life with MexiCook - the ultimate destination for authentic Mexican recipes and culinary inspiration!</h1>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="bg-black">
            <img src={img2} className="w-full opacity-60" />
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-white font-bold text-sm md:text-xl w-4/5">MexiCook is a website that offers a wealth of information and resources related to Mexican cuisine. The website features a diverse range of authentic Mexican recipes, from classic favorites like guacamole and tacos to lesser-known dishes like chiles en nogada and cochinita pibil.</h1>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
