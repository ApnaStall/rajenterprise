import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <>
    <a href="#">
    <div className="w-full max-w-xs mx-auto">
      <div className="hover:bg-linear-to-b from-[#dff1ff] to-white rounded-2xl p-5 shadow-md flex flex-col items-center transition-slideup">
        
        <img
          src={image}
          alt={title}
          className="h-80 object-contain mb-4"
        />

        <h2 className="text-lg font-medium text-gray-800 text-center">
          {title}
        </h2>

        <p className="text-xl font-semibold text-gray-900 mt-1">
          ₹{price}/-
        </p>

        <button className="mt-4 w-10 h-10 rounded-full bg-black text-white text-2xl flex items-center justify-center hover:scale-110 transition">
          +
        </button>
      </div>
    </div>
    </a>
    </>
  );
};

export default ProductCard;
