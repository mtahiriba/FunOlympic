import React from "react";
// import image from "../assets/images/image.png";
import image from "../assets/images/mainimg.png";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 h-[550px] flex items-center">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <img src={image} alt="laptop" className="w-[500px] mx-auto my-4" />
      
      <div className="flex flex-col justify-center">
        <p className="text-green-600 font-bold uppercase">Broadcast all over the World</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">The FunOlympic Games 2023</h1>
        <p>
          This platform is intent to broadcast the FunOlympic Games 2023 all over the world.
          All the live streamings and the highlights will be available here.
          Watch the highlights of the games and enjoy the fun.

        </p> 
        <span className="font-bold uppercase">Fun - Enjoy - Watch</span>
        <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 ">Get Started</button>
      </div>
      </div>
    </div>
  );
};   

export default Analytics;
