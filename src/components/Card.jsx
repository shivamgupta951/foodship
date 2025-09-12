import React from "react";
import image1 from "../assets/image1.avif";
import { FiDelete } from "react-icons/fi";
import { CgRemove } from "react-icons/cg";
import { IoRemove } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
const Card = () => {
  return (
    <div className="w-full py-2 bg-black/70 rounded-lg flex justify-between items-center">
      <div className="flex w-[45%]">
        <img
          src={image1}
          alt="image"
          className="h-20 w-[50%] mx-4 rounded-xl border border-gray-400"
        />
        <div>
          <div className="text-[80%] font-bold my-[10%] flex justify-center items-center text-green-500 tracking-tighter">
            Chicken Soup
          </div>
          <div className="flex items-center border rounded-2xl w-[100%] cursor-pointer p-1 border-blue-600">
            <div className="border-blue-600 border-r-2 px-3">-</div>
            <div className="border-blue-600 px-2">1</div>
            <div className="border-blue-600 border-l-2 px-2">+</div>
          </div>
        </div>
      </div>
      <div className="space-y-2 mx-2">
        <div className="flex justify-center items-center text-[90%] text-yellow-400">
          Rs 399/-
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineDelete className="size-8 text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Card;
