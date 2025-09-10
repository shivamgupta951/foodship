import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import categories from "../Category";
import ElectricBorder from "../components/ElectricBorder";
import { motion } from "motion/react";
import { FaBowlingBall } from "react-icons/fa6";
import TrueFocus from "../components/TrueFocus";
import Items from "../components/Items";
import { useState } from "react";
import { BioContext } from "../ContextApi/text";
import { div } from "motion/react-client";
import FoodShip_logo from "../assets/FoodShip.png";

const Home = () => {
  const { cards, setCards } = useContext(BioContext);
  const { menustatus, setMenuStatus, cartstatus, setCartstatus } =
    useContext(BioContext);
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center items-center mt-40 lg:mt-10 relative">
        {menustatus ? (
          <Items />
        ) : (
          <div>
            <div className="text-white flex justify-center items-center text-xl my-8">
              <TrueFocus
                sentence="Food Categories"
                manualMode={false}
                blurAmount={4}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              style={{ borderRadius: 16, padding: "5px" }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
                className="cursor-grabbing grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 p-10 bg-gray-900 w-full relative"
              >
                <motion.div
                  initial={{ x: 0 }}
                  animate={{
                    x: "20",
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 left-2"
                >
                  <div className="animate-bounce">
                    <FaBowlingBall className="size-7 animate-spin-slow text-white" />
                  </div>
                </motion.div>
                {categories.map((items, index) => {
                  return (
                    // ✅ Added temporary key using index
                    <div
                      key={items.id}
                      onClick={() => {
                        setCards(items.name.toLowerCase());
                        setMenuStatus(true);
                      }}
                      className={`${
                        items.name.toLowerCase() === cards
                          ? "transition-transform transform duration-300 ease-in-out ring-4 ring-red-500 scale-105"
                          : ""
                      } cursor-grabbing border p-2 px-4 bg-gray-500 rounded-md transition-all transform shadow-lg duration-500 ease-in-out hover:scale-105 hover:ring-2 hover:ring-green-500 hover:bg-gray-600 relative`}
                    >
                      {items.name.toLowerCase() === cards && (
                        <div className="absolute text-[50%] bottom-36 p-1 border-2 border-black gap-2 rounded-2xl right-0 bg-red-800 text-white">
                          Recently Viewed
                        </div>
                      )}
                      <div className="flex justify-center items-center text-white bg-white p-2 rounded-lg outline outline-2 outline-blue-700 my-2">
                        {items.icon}
                      </div>
                      <div className="flex justify-center items-center text-yellow-200">
                        {items.name}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </ElectricBorder>
          </div>
        )}
      </div>
      {cartstatus && (
        <div className="absolute text-white top-0 rounded-l-2xl border-black flex justify-center right-0 bg-gradient-to-br from-violet-900 border-4 via-slate-800 to-secondary min-h-screen w-[25%] py-2">
          <div className="w-full">
            <div className="flex justify-between items-center my-2 mx-4">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="flex justify-start items-center w-[40%] mx-0"
              >
                <img
                  src={FoodShip_logo}
                  alt="FoodShip Logo"
                  className="mr-1 rounded-lg size-6"
                />

                <div className="font-extrabold text-md bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  FoodShip
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 0.6 }}
                transition={{ duration: 2 }}
                className="btn btn-sm btn-secondary opacity-70"
                onClick={() => {
                  setCartstatus(false);
                }}
              >
                X
              </motion.div>
            </div>
            <div className="text-2xl flex justify-center items-center tracking-widest m-4 bg-yellow-500 p-2 rounded-2xl outline-lime-500 outline">
              <div className="text-green-900 p-1 border-red-900 border-b-2 font-extrabold">
                Cart Section
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
