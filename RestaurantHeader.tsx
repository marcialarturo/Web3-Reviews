import React from "react";
import { Rating } from "react-simple-star-rating";

function RestaurantHeader(props) {
  return (
    <div
      className="flex items-center  h-96 bg-cover bg-center justify-between"
      style={{
        background:
          "linear-gradient(90deg, rgba(202,232,187,1) 0%, rgba(252,129,15,1) 0%, rgba(232,196,149,1) 50%, rgba(132,161,171,1) 100%)",
      }}
    >
      <div className="pl-32">
        <h1 className="text-white text-4xl  pt-8">The Burger Joint</h1>

        <div className="flex items-center">
          <Rating
            initialValue={4}
            readonly
            allowFraction
            size={35}
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
          />
          <span className="text-white text-xl font-bold pl-6">999</span>
        </div>

        <div className="flex  items-center gap-2">
          <img src="/assets/verify.jpg" alt="verify" style={{ width: "40px ", height: "40px", borderRadius: "50%" }} />

          <p className="text-white text-xl font-bold">Claimed</p>
        </div>

        <p className="text-white text-xl font-bold">Price $$$</p>
        <p className="text-white text-xl font-bold">Fast Food Italian Organic</p>
      </div>
      <div className="gap-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 w-72  rounded-full">
          See All Images
        </button>
      </div>
    </div>
  );
}

export default RestaurantHeader;
