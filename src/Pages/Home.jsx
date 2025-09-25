import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import categories from "../Category";
import ElectricBorder from "../components/ElectricBorder";
import { motion } from "motion/react";
import { FaBowlingBall } from "react-icons/fa6";
import TrueFocus from "../components/TrueFocus";
import Items from "../components/Items";
import { BioContext } from "../ContextApi/text";
import FoodShip_logo from "../assets/FoodShip.png";
import Card from "../components/Card";
import { food_items } from "../lib/food";
import { CiViewList } from "react-icons/ci";
import { AiFillApi } from "react-icons/ai";
import toast from "react-hot-toast";
import { div } from "motion/react-client";

const Home = () => {
  const { cards, setCards } = useContext(BioContext);
  const {
    menustatus,
    setMenuStatus,
    cartstatus,
    setCartstatus,
    cart,
    subTotal,
    taxes,
    Total,
    addressStatus,
    setAddressStatus,
    address,
    setAddress,
    setCart,
    setQuantities
  } = useContext(BioContext);

  useEffect(() => {
    if (cartstatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartstatus]);

  return (
    <div>
      <Navbar />
      <div
        className={`flex justify-center items-center mt-40 lg:mt-10 ${
          cartstatus
            ? "opacity-10 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
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
              <div
                className="border text-sm btn btn-sm mx-4 mt-2"
                onClick={() => setAddressStatus(true)}
              >
                Update Address
              </div>
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
                  animate={{ x: "20" }}
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
                {categories.map((items) => {
                  return (
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
      {/* 🛒 Cart Modal */}
      {cartstatus && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50 opacity-90 md:opacity-80">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[100%] text-white rounded-2xl shadow-md shadow-fuchsia-900 border-black bg-gradient-to-br from-violet-900 border-4 via-slate-800 to-secondary min-h-[80%] md:w-[80%] lg:w-[60%] lg:h-[86%] py-2"
          >
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
              <div className="flex justify-center items-center">
                <div className="text-[70%] flex justify-center items-center tracking-widest m-0 bg-yellow-500 p-1 rounded-2xl outline-lime-500 outline w-[40%] md:text-sm">
                  <div className="text-green-900 p-1 border-red-900 border-b-2 font-extrabold">
                    Cart Section
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mt-4 text-sm text-yellow-400 py-1 tracking-widest border-t-2 border-b-2 w-[40%]">
                  Items List <CiViewList className="size-6 mx-1" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[95%] md:w-[70%] my-4 space-y-2 overflow-y-auto max-h-[250px] shadow-md shadow-pink-400 p-4 border rounded-md border-pink-400">
                  {cart.length === 0 ? (
                    <div className="text-center my-10">Empty Cart!</div>
                  ) : null}
                  {cart.map((itemId) => (
                    <Card key={itemId} id={itemId} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-[80%] w-[80%] md:w-[55%] lg:w-[45%] border-b border-gray-300 space-y-2 py-2">
                <div className="px-6 flex justify-between items-center w-[100%]">
                  <div>SubTotal</div>
                  <div>Rs {subTotal}/-</div>
                </div>
                <div className="px-6 flex justify-between items-center w-[100%]">
                  <div>Delivery Fee</div>
                  <div>Rs 89/-</div>
                </div>
                <div className="px-6 flex justify-between items-center w-[100%]">
                  <div>Taxes</div>
                  <div>Rs {taxes}/-</div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <div className="w-[70%] flex justify-between items-center md:w-[50%] lg:w-[40%]">
                <div className="text-green-500">Total</div>
                <div className="bg-black px-2 rounded-xl my-1 text-cyan-200 text-sm">
                  Rs {Total}/-
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center mt-2">
              <div
                className="btn btn-sm w-[70%] md:w-[50%] lg:w-[40%] btn-accent font-extrabold text-black/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cart.length === 0}
                onClick={() => {
                  if (cart.length === 0) return;
                  toast.success("Order Placed at your Address!");
                  setCart([]); // clear cart
                  setQuantities({}); // reset quantities
                }}
              >
                Place Order <AiFillApi size={20} className="mx-0" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {addressStatus && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/90 z-50 opacity-95 md:opacity-95">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[90%] text-white rounded-2xl shadow-md shadow-fuchsia-900 border-black bg-gradient-to-br from-violet-900 border-4 via-slate-800 to-secondary min-h-[80%] md:w-[60%] lg:w-[40%] lg:h-[83%] py-2"
          >
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
                  className="btn btn-sm btn-secondary opacity-80"
                  onClick={() => {
                    setAddressStatus(false);
                  }}
                >
                  X
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl tracking-tight text-primary font-bold bg-white my-4">
              Address Card
            </div>

            {/* 🔹 Address Form */}
            <div className="px-6 flex justify-center items-center flex-col">
              <div className="my-2 text-sm">Update New Address</div>
              <form
                className="space-y-2 w-[100%] border-b-2 py-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Address Saved ✅");
                  setAddressStatus(false);
                }}
              >
                <div className="flex justify-around items-center">
                  <input
                    type="text"
                    placeholder="Full Name"
                    maxLength={35}
                    className="input input-bordered w-[45%]"
                    value={address.name}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    maxLength={35}
                    className="input input-bordered w-[45%]"
                    value={address.phone}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                </div>
                <div className="flex justify-around items-center">
                  <input
                    type="text"
                    placeholder="House No."
                    className="input input-bordered w-[45%]"
                    value={address.houseNo}
                    maxLength={35}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        houseNo: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="Area"
                    maxLength={35}
                    className="input input-bordered w-[45%]"
                    value={address.area}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, area: e.target.value }))
                    }
                  />
                </div>
                <div className="flex justify-around items-center">
                  <input
                    type="text"
                    placeholder="Landmark"
                    maxLength={35}
                    className="input input-bordered w-[45%]"
                    value={address.landmark}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        landmark: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="City"
                    maxLength={35}
                    className="input input-bordered w-[45%]"
                    value={address.city}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, city: e.target.value }))
                    }
                  />
                </div>
                <div className="flex justify-around items-center">
                  <input
                    type="text"
                    placeholder="Pincode"
                    maxLength={35}
                    className="input input-bordered w-[45%]"
                    value={address.pincode}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        pincode: e.target.value,
                      }))
                    }
                  />
                  <button className="btn btn-accent w-[45%]" type="submit">
                    Save Address
                  </button>
                </div>
              </form>

              {/* 🔹 Current Address Display */}
              {addressStatus && (
                <div className=" w-full">
                  <div className="m-4 my-6 p-2 border rounded-md text-sm w-[50%] opacity-60">
                    <div className="font-bold">Current Address:</div>
                    <div>
                      {address.name.length == 0 ? "name" : address.name}
                    </div>
                    <div>
                      {address.phone.length == 0 ? "phone" : address.phone}
                    </div>
                    <div>
                      {address.houseNo.length == 0
                        ? "houseNo"
                        : address.houseNo}
                    </div>
                    <div>
                      {" "}
                      {address.area.length == 0 ? "area" : address.area}
                    </div>
                    <div>
                      {address.landmark.length == 0
                        ? "landmark"
                        : address.landmark}
                    </div>
                    <div>
                      {address.city.length == 0 ? "city" : address.city} -{" "}
                      {address.pincode.length == 0
                        ? "pincode"
                        : address.pincode}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
