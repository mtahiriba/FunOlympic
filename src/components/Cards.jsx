import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <span className="flex justify-center mb-10 text-3xl font-mono font-bold">Games</span>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300 justify-center items-center">
          <img
            className="w-64"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3156710/basketball-clipart-xl.png"
            alt={"/"}
          />
          <p className="mt-10 font-bold text-xl">basket Ball Game</p>
        </div>
        
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 justify-center items-center">
        <img
            className="w-64"
            src="https://static.vecteezy.com/system/resources/previews/013/165/908/original/archery-target-goal-achieve-concept-png.png"
            alt={"/"}
          />
          <p className="mt-10 font-bold text-xl">Archery Game</p>
        </div>
        
        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300 justify-center items-center h-[400px]">
        <img
            className="w-64"
            src="https://img.freepik.com/premium-vector/abstract-soccer-player-running-with-ball-from-splash-watercolors-illustration-paints_291138-106.jpg?w=2000"
            alt={"/"}
          />
          <p className="mt-10 font-bold text-xl">basket Ball Game</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
