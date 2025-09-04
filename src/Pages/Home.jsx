import React from "react";
import Navbar from "../components/Navbar";
import categories from "../Category";
import ElectricBorder from "../components/ElectricBorder";
import { motion } from "motion/react";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaBowlingBall } from "react-icons/fa6";
import TrueFocus from "../components/TrueFocus";
import Card from "../components/Card";
import Items from "../components/Items";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-40">
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
              className="cursor-grabbing grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-10 bg-gray-900 w-full relative"
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
                    key={index} // TODO: replace with unique id later
                    className="cursor-grabbing border p-2 px-4 bg-gray-500 rounded-md transition-all transform shadow-lg duration-500 ease-in-out hover:scale-105 hover:ring-2 hover:ring-red-500 hover:bg-gray-600"
                  >
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
      </div>
      <Items/>
    </div>
  );
};

export default Home;
