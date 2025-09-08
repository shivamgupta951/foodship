import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import ElectricBorder from "../components/ElectricBorder";
import { motion } from "motion/react";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaBowlingBall } from "react-icons/fa6";
import TrueFocus from "../components/TrueFocus";
import Card from "../components/Card";
import testing from "../Texting";
import image1 from "../assets/image1.avif";
import dec1 from "../assets/dec1.png";
import { SiFoodpanda } from "react-icons/si";
import FoodShip_logo from "../assets/FoodShip.png";
import { food_items } from "../lib/food";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";
import { BioContext } from "../ContextApi/text";

const Items = () => {
  const { cards } = useContext(BioContext);
  const { input } = useContext(BioContext);
  const cate = cards;
  const { setMenuStatus } = useContext(BioContext);
  const filteredItems =
    input.length !== 0
      ? food_items.filter(
          (item) =>
            item.food_name.includes(input) ||
            item.food_name.toLowerCase().includes(input)
        )
      : cate === "all"
      ? food_items
      : food_items.filter((item) => item.food_category.toLowerCase() === cate);
  return (
    <div className="bg-black ">
      <div className="flex justify-center items-center">
        <div>
          <div className="text-green-700 flex justify-center items-center text-xl my-4 mb-2 space-x-8">
            <TrueFocus
              sentence="Food-Menu"
              manualMode={false}
              blurAmount={4}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="text-white flex justify-end items-center mx-8">
            {" "}
            <button
              className="btn flex justify-center items-center gap-2 btn-sm text-green-400 border-2 border-orange-500 rounded-lg px-4 animate-bounce"
              onClick={() => {
                setMenuStatus(false);
              }}
            >
              <BiLeftArrowAlt />
              Back
            </button>
          </div>
          <div className="flex border items-center px-10 py-4 rounded-3xl bg-gradient-to-r from-orange-800 via-yellow-700 to-red-900 lg:justify-around lg:space-x-20">
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "easeInOut",
              }}
              className="hidden lg:flex"
            >
              <img
                src={dec1}
                alt="image"
                className="w-[400px] h-[250px] rounded-3xl outline outline-4 outline-blue-700 shadow-2xl shadow-green-600"
              />
            </motion.div>
            <div className="border p-2 lg:pb-10 lg:px-6 rounded-2xl bg-black">
              <div className="flex justify-center items-center my-8 lg:hidden">
                <motion.div
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut",
                  }}
                  className=""
                >
                  <img
                    src={dec1}
                    alt="image"
                    className="w-[300px] h-[150px] rounded-3xl outline outline-4 outline-blue-700 shadow-2xl shadow-green-600"
                  />
                </motion.div>
              </div>
              <div className="flex justify-center items-center my-4 font-extrabold text-sm md:text-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent relative">
                Select your items{" "}
                <SiFoodpanda className="hidden md:inline md:text-violet-400 md:mx-2 " />
                <div className="md:text-white absolute right-0">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="flex justify-start items-center mx-8 w-[20%] md:mx-12"
                  >
                    <img
                      src={FoodShip_logo}
                      alt="FoodShip Logo"
                      className="size-4 mx-4 mr-1 rounded-lg md:size-6 lg:size-6"
                    />

                    <div className="font-extrabold text-[60%] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent md:text-md lg:text-md">
                      FoodShip
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="max-h-[350px] overflow-y-auto outline outline-4 outline-violet-700 p-5 ">
                {" "}
                {/* 👈 scroll wrapper */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  className={`${
                    filteredItems.length === 0
                      ? "flex justify-center items-center"
                      : "cursor-grabbing grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5 bg-gradient-to-r from-gray-900 to-black w-full"
                  }`}
                >
                  {filteredItems.length === 0 ? (
                    <div className="text-white flex justify-center items-center size-60 w-72 md:size-96 md:w-[500px]">
                      No items found
                    </div>
                  ) : (
                    filteredItems.map((item, index) => {
                      const { food_image, food_name, price, food_type } = item;

                      return (
                        <div
                          key={index}
                          className="border p-2 px-4 bg-gray-500 rounded-md transition-all transform shadow-lg duration-500 ease-in-out hover:scale-105 hover:ring-2 hover:ring-red-500 hover:bg-gray-600 md:px-2"
                        >
                          <div className="flex justify-center items-center">
                            <img
                              src={food_image}
                              alt={food_name}
                              className="size-16 mx-2 rounded-lg md:size-16 lg:size-32"
                            />
                          </div>
                          <div className="text-[40%] flex justify-center mx-4 my-1 md:text-[70%] font-extrabold items-center text-black">
                            {food_name}
                          </div>
                          <div
                            className={`text-[60%] md:text-sm px-2 py-1 flex justify-between ${
                              food_type === "veg"
                                ? "bg-green-950"
                                : "bg-red-950"
                            } items-center`}
                          >
                            <div className="text-blue-200">Rs {price}/-</div>
                            <div className="text-orange-600 text-[80%] flex justify-center items-center">
                              {food_type === "veg" ? (
                                <LuLeafyGreen className="mx-1" />
                              ) : (
                                <GiChickenOven className="mx-1" />
                              )}
                              {food_type}
                            </div>
                          </div>
                          <div className="text-[70%] transition-all transform duration-500 ease-in-out text-white flex justify-center items-center p-1 mt-2 bg-gradient-to-bl from-yellow-900 via-orange-900 to-blue-900 md:text-md border rounded-lg hover:from-yellow-600 hover:via-orange-500 hover:to-blue-700 cursor-pointer hover:scale-105">
                            Add to cart
                          </div>
                        </div>
                      );
                    })
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
