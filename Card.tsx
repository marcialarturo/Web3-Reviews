import React, { useState, useContext } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
// import MyContext from "~~/pages/_app";
import { useRouter } from "next/router";

function Card({ restaurant }) {
  console.log("🚀 ~ file: Card.tsx:7 ~ Card ~ restaurant:", restaurant);
  // const { data, setData, selectedRestaurant, setSelectedRestaurant } = useContext(MyContext);
  const { name, location, website, categories, price_range, image } = restaurant;
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const handleClick = () => {
    router.push("/restaurants/1");

    console.log("🚀", router.query);

    // setSelectedRestaurant('New value');
    // console.log("🚀 ~ file: Card.tsx:17 ~ handleClick ~ setSelectedRestaurant:", setSelectedRestaurant);
  };
  return (
    <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow " onClick={handleClick}>
      <h5 className="mb-2 text-2xl font-bold">{name}</h5>
      <Image src={image ? image : "/assets/food.jpg"} alt="food" height={250} width={250} />
      <div className="flex p-4">
        {categories?.length > 0 &&
          categories.map(cat => (
            <span
              key={cat}
              className="bg-green-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 text-white"
              style={{ backgroundColor: Math.random() > 0.5 ? "red" : Math.random() > 0.5 ? "green" : "blue" }}
            >
              {cat}
            </span>
          ))}
      </div>
      <div className="flex items-center">
        <Rating
          initialValue={4}
          readonly
          allowFraction
          size={35}
          emptyStyle={{ display: "flex" }}
          fillStyle={{ display: "-webkit-inline-box" }}
        />
        <span className="flex text-bold pl-4 ">999</span>
      </div>
    </div>
  );
}

export default Card;
