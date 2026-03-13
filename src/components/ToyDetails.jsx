import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import TryNowForm from "./TryNowForm";

const ToyDetails = () => {
  useEffect(() => {
      document.title = "toy Details - ToyTopia";
    }, []);
  const { id } = useParams();
  const toyId = parseInt(id);
  const toyDetails = useLoaderData();
  const toy = toyDetails.find((toy) => toy.toyId === toyId);
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toy;
  
  return (
    <div className="mt-5 max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-5">
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-60 object-cover"
      />

      <div className=" space-y-2">
        <h2 className="text-2xl font-bold mt-5">{toyName}</h2>

        <p className="text-gray-600">{description}</p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>
            <span className="font-semibold">Category:</span> {subCategory}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {rating}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {availableQuantity}
          </p>
        </div>

        <div className="border-t pt-3 mt-3">
          <p className="font-semibold">Seller:</p>
          <p>{sellerName}</p>
          <p className="text-gray-500 text-sm">{sellerEmail}</p>
        </div>
      </div>

      <TryNowForm></TryNowForm>
    </div>
  );
};

export default ToyDetails;
