import React from "react";
import { useLoaderData } from "react-router";
import Toys from "../components/Toys";
const RatingToy = () => {
  const toysData = useLoaderData();
  const top8Toys = toysData.sort((a, b) => b.rating - a.rating).slice(0, 8); 
 
 
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center my-6 relative ">
        Popular Toys
        <span className="block w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h2>
      <section className="grid grid-cols-4 gap-4 ">
        {top8Toys.map((toys) => (
          <Toys key={toys.toyId} toys={toys} />
        ))}
      </section>
    </div>
  );
};

export default RatingToy;
