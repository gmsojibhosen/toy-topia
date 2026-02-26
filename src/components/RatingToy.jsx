import React from 'react';
import { useLoaderData } from "react-router";
import Toys from "../components/Toys";
const RatingToy = () => {

     const topRatingToy = useLoaderData();
      console.log(topRatingToy);
      const filteredToys = topRatingToy.filter((toys) => toys.rating >= 4.5);
    return (
     
        <section className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredToys.map((toys) => (
            <Toys key={toys.toyId} toys={toys} />
          ))}
        </section>
  
    );
};

export default RatingToy;