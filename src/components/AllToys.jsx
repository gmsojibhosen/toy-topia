import { useLoaderData } from "react-router";
import Toy from "./Toys";
import Toys from "./Toys";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-linear-to-r from-[#fbdb5b]  to-[#f5b906] rounded-3xl p-8 mb-6 text-center mt-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Explore Our Fun Toys!
        </h1>
        <p className="text-gray-700 text-lg">Find toys Wonderful and buy now</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {allToys.map((toys) => (
          <Toys toys={toys}></Toys>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
