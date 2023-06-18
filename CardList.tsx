import React from "react";
import {
  useAnimationConfig,
  useScaffoldContract,
  useScaffoldContractRead,
  useScaffoldEventHistory,
  useScaffoldEventSubscriber,
} from "~~/hooks/scaffold-eth";

import Image from "next/image";
import Card from "./Card";

const data = [
  {
    id: 1,
    name: "The Burger Joint",
    location: "Los Angeles, California",
    website: "www.theburgerjointla.com",
    categories: ["American", "burgers"],
    price_range: "$$",
    image:
      "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
  {
    id: 2,
    name: "Pasta Palace",
    location: "Chicago, Illinois",
    website: "www.pastapalacechicago.com",
    categories: ["Italian", "pasta"],
    price_range: "$$$",
    image:
      "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=784&q=80",
  },
  {
    id: 3,
    name: "Sushi Spot",
    location: "San Francisco, California",
    website: "www.sushispotsf.com",
    categories: ["Japanese", "sushi"],
    price_range: "$$$$",
    image:
      "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 4,
    name: "BBQ Barn",
    location: "Austin, Texas",
    website: "www.bbqbarnaustin.com",
    categories: ["American", "BBQ"],
    price_range: "$$",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },

  {
    id: 5,
    name: "Pizza Palace",
    location: "New York, New York",
    website: "www.pizzapalacenyc.com",
    categories: ["Italian", "pizza"],
    price_range: "$$",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 6,
    name: "The Crab Shack",
    location: "Miami, Florida",
    website: "www.thecrabshackmiami.com",
    categories: ["Seafood", "crab"],
    price_range: "$$$",
    image:
      "https://plus.unsplash.com/premium_photo-1663840345377-3813d196d5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 7,
    name: "Carnivore",
    location: "Dallas, Texas",
    website: "www.carnivoredallas.com",
    categories: ["Steakhouse", "grill"],
    price_range: "$$$$",
    image:
      "https://images.unsplash.com/photo-1669223308086-bf5152ff0231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 8,
    name: "Vegan Vibes",
    location: "Portland, Oregon",
    website: "www.veganvibesportland.com",
    categories: ["Vegan", "healthy"],
    price_range: "$$",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 9,
    name: "Crazy Curry",
    location: "Seattle, Washington",
    website: "www.crazycurryseattle.com",
    categories: ["Indian", "curry"],
    price_range: "$$",
    image:
      "https://images.unsplash.com/photo-1492016775777-ed98c058f826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 10,
    name: "Taco Time",
    location: "Denver, Colorado",
    website: "www.tacotimedenver.com",
    categories: ["Mexican", "tacos"],
    price_range: "$",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=898&q=80",
  },
];

function CardList(props) {
  const { data: totalCounter } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "totalCounter",
  });
  return (
    <div>
      <h1 className="p-5  text-2xl font-bold">Top Restaurants </h1>
      <div className="xl:container xl:mx-auto ">
        <div className="flex flex-wrap gap-8 justify-center">
          {data.length > 0
            ? data.map(restaurant => <Card restaurant={restaurant} key={restaurant.id} />)
            : "No Restaurants"}
        </div>
      </div>
    </div>
  );
}

export default CardList;
