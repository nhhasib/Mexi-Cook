import React from "react";
import img1 from "../images/plate-with-nachos-amidst-mexican-food.jpg";

const Banner = () => {
  return (
    <div className="mt-4">
      <div className="carousel w-11/12 mx-auto">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="bg-black">
            <img src={img1} className="w-full opacity-60" />
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-white font-bold text-6xl">Welcome to Mexican foods</h1>
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
            <h1 className="text-white font-bold text-6xl">Welcome to Mexican foods</h1>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="bg-black">
            <img src={img1} className="w-full opacity-60" />
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <h1 className="text-white font-bold text-6xl">Welcome to Mexican foods</h1>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
