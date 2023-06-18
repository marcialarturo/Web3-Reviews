import React from "react";

const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-center h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(/assets/hero2.jpg)`, backgroundPosition: "50% 80%" }}
    >
      <form action="submit">
        <div className="flex justify-between gap-6">
          <div className="w-96">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Search for businesses"
            />
          </div>
          <div className="w-96">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Where?"
            />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="w-48 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Let's go
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
