// src/components/Card.jsx
import React, { useContext } from "react";
import { BioContext } from "../ContextApi/text";
import { food_items } from "../lib/food";
import { CgRemove } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { FiDelete } from "react-icons/fi";

const Card = ({ id }) => {
  const { deleteInCart, updateQuantity, quantities } = useContext(BioContext);

  const card_id = food_items.find((item) => item.id === id);
  const qty = quantities[id] || 1;

  return (
    <div className="bg-gray-900 text-white p-3 rounded-lg flex justify-between shadow-lg hover:shadow-xl border border-gray-700">
      <div className="flex items-center space-x-3">
        <img
          src={card_id.food_image}
          alt={card_id.food_name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-sm font-bold">{card_id.food_name}</h2>
          <p className="text-xs text-gray-400">₹{card_id.price}/-</p>
          <div className="flex items-center space-x-2 mt-1">
            <button
              className="bg-red-600 px-2 py-1 rounded-md text-[50%] hover:bg-red-700 flex items-center"
              onClick={() => updateQuantity(card_id.id, qty - 1)}
            >
              <CgRemove className="mr-1" /> Remove
            </button>
            <span className="px-3 py-1 bg-gray-700 rounded-md">{qty}</span>
            <button
              className="bg-green-600 px-2 py-1 rounded-md text-[50%] hover:bg-green-700 flex items-center"
              onClick={() => updateQuantity(card_id.id, qty + 1)}
            >
              <IoMdAdd className="mr-1" /> Add
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          className="text-red-500 hover:text-red-700 text-lg"
          onClick={() => deleteInCart(card_id.id)}
        >
          <FiDelete />
        </button>
      </div>
    </div>
  );
};

export default Card;
