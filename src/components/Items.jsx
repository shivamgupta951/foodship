import React from "react";
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

const Items = () => {
  return (
    <div className="bg-black py-5">
      <div className="flex justify-center items-center my-5">
        <div>
          <div className="text-green-700 flex justify-center items-center text-xl my-8">
            <TrueFocus
              sentence="Food-Menu"
              manualMode={false}
              blurAmount={4}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="flex border items-center px-10 py-6 rounded-3xl bg-gradient-to-r from-orange-800 via-yellow-700 to-red-900 lg:justify-around lg:space-x-20">
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
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
              <div className="flex justify-center items-center my-4 font-extrabold text-sm md:text-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent relative">
                Select your items{" "}
                <SiFoodpanda className="text-violet-400 mx-2 " />
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
              <div className="max-h-[400px] overflow-y-auto outline outline-4 outline-violet-700 p-5 ">
                {" "}
                {/* 👈 scroll wrapper */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  className="cursor-pointer grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5 bg-gradient-to-r from-gray-900 to-black w-full"
                >
                  {testing.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="cursor-pointer border p-2 px-4 bg-gray-500 rounded-md transition-all transform shadow-lg duration-500 ease-in-out hover:scale-105 hover:ring-2 hover:ring-red-500 hover:bg-gray-600 md:px-2"
                      >
                        <div className="flex justify-center items-center">
                          <img
                            src={image1}
                            alt="image"
                            className="size-15 mx-2 rounded-lg md:size-16 lg:size-32"
                          />
                        </div>
                        <div className="flex mx-4 text-lg font-extrabold justify-start items-center text-black">
                          {items.name}
                        </div>
                        <div className="px-2 py-1 flex justify-between bg-green-950 items-center">
                          <div className="text-sm text-blue-200">Rs 399/-</div>
                          <div className="text-sm text-orange-600">i Veg</div>
                        </div>
                        <div className="flex justify-center items-center p-1 mt-2 bg-gradient-to-bl from-yellow-900 via-orange-900 to-blue-900 text-md border rounded-lg">Add to cart</div>
                      </div>
                    );
                  })}
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
