import React from "react";
import Typed from "react-typed";
import shareVideo from "../assets/share.mp4";
const Hero = () => {
  return (
    <div className="text-white  w-full h-screen mx-auto bg-black">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 buttom-0 bg-blackOverlay h-full gap-3">
          <div className=" pt-[120px] text-center flex flex-col">
            <p className="uppercase text-[#00df9a] font-bold p-2">
              FUN - ENJOY - WaTCH
            </p>
            <p className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              LIVE BROADCAST
            </p>

            <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                FunOlympic Games 2023{" "}
              </div>

              <Typed
                className="md:text-5xl sm:text-2xl text-5xl font-bold pl-2"
                strings={["FUN", "ENJOY", "WATCH"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>

            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
