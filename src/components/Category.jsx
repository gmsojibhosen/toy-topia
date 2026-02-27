import React from 'react';
import { useLoaderData } from 'react-router';

const Category = () => {
    const toysData = useLoaderData();
    
   return (
     <div className="max-w-7xl mx-auto my-16 px-4">
       <h2 className="text-3xl font-bold text-center my-6 relative ">
         Shop by Category
         <span className="block w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
       </h2>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
         {toysData.map((category, index) => (
           <div
             key={index}
             className="bg-base-200 p-6 text-center rounded-xl shadow hover:shadow-lg transition"
           >
             {category.subCategory}
           </div>
         ))}
       </div>
     </div>
   );
};



 
  
export default Category;
