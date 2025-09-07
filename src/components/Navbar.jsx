import React, { useContext } from "react";
import FoodShip_logo from "../assets/FoodShip.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Button } from "./moving-border";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { BioContext } from "../ContextApi/text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { menustatus } = useContext(BioContext);
  return (
    <div className="w-full bg-slate-800 h-16 flex justify-between items-center relative">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-start items-center mx-8 w-[20%] md:mx-12"
      >
        <img
          src={FoodShip_logo}
          alt="FoodShip Logo"
          className="size-4 mx-2 rounded-lg md:size-8 lg:size-8"
        />

        <div className="font-extrabold text-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          FoodShip
        </div>
      </motion.div>
      <div className="p-1 border rounded-2xl text-[40%] flex flex-wrap justify-center items-center tracking-wider px-2 bg-gradient-to-r from-yellow-600 via-green-500 to-red-500 bg-clip-text text-transparent md:text-[50%] md:w-[40%] lg:text-[60%] lg:px-4 lg:w-[30%]">
        Hungry🍴? FoodShip makes it simple. Order, relax, and enjoy fresh food
        with FoodShip in minutes. 🚀
      </div>
      <div className="hidden md:flex justify-end items-center w-[50%] lg:w-[30%] space-x-2 pr-4">
        <form
          onClick={(e) => {
            if (!menustatus) {
              e.preventDefault();
              toast.success("Select a category to use the search bar!");
            }
          }}
          className="flex items-center justify-center bg-white p-1 rounded-lg w-[50%] shadow-md lg:w-[65%]"
        >
          <IoSearch className="mx-2 size-4 text-green-400" />
          <input
            type="text"
            placeholder="Search Items"
            className={`p-1 w-[80%] text-[12px] lg:w-[60%] lg:text-[15px] bg-white ${
              !menustatus ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!menustatus} // still keep disabled for actual typing
          />
        </form>
        <Button
          borderRadius={12}
          className="bg-yellow-500 text-black dark:border-slate-900 border-2 relative"
        >
          Cart <FaCartArrowDown className="mx-1" size={22} />
          <span className="absolute top-0 right-1">0</span>{" "}
        </Button>
      </div>
      <div className="block md:hidden mx-5">
        <button onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={28} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 w-full bg-slate-900 p-5 flex flex-col space-y-4 md:hidden">
          <div className="flex justify-around items-center">
            <form
              onClick={(e) => {
                if (!menustatus) {
                  e.preventDefault();
                  toast.success("Select a category to use the search bar!");
                }
              }}
              className="flex items-center justify-center bg-white p-1 rounded-lg w-[70%] shadow-md"
            >
              <IoSearch className="mx-2 size-6 text-green-400" />
              <input
                type="text"
                placeholder="Search Items"
                className={`p-1 w-[100%] bg-white ${
                  !menustatus ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!menustatus}
              />
            </form>
            <Button
              borderRadius={12}
              className="bg-yellow-500 text-black dark:border-slate-900 border-2 relative"
            >
              Cart
              <FaCartArrowDown className="mx-1" size={22} />
              <span className="absolute top-0 right-1">0</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
