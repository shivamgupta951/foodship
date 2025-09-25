// src/ContextApi/BioContext.jsx
import { createContext, useState, useEffect } from "react";
import { food_items } from "../lib/food";
import toast from "react-hot-toast";

export const BioContext = createContext(null);

export function BioProvider({ children }) {
  const myName = "Shivam";
  let toastLock = false;
  const mySurname = "Gupta";
  const items = food_items;

  const [menustatus, setMenuStatus] = useState(false);
  const [value, setValue] = useState(1);
  const [cards, setCards] = useState("");
  const [input, setInput] = useState("");
  const [cartstatus, setCartstatus] = useState(false);
  const [cart, setCart] = useState([1, 2, 3]);
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [Total, setTotal] = useState(0);
  const [addressStatus, setAddressStatus] = useState(false);

  // 🔹 new: track quantities separately
  const [quantities, setQuantities] = useState({});

  // 🔹 NEW: Address state
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    houseNo: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  // 🔹 pure helper function
  const calculateSub = (id) => {
    const item = items.find((food) => food.id === id);
    if (!item) return 0;
    const qty = quantities[id] || 1;
    return item.price * qty;
  };

  const calculateSubTotal = () => {
    let sum = 0;
    cart.forEach((id) => {
      sum += calculateSub(id);
    });
    return sum;
  };

  // 🔹 recalc subtotal whenever cart or item quantities change
  useEffect(() => {
    const sum = calculateSubTotal();
    setSubTotal(sum);

    const tax = Math.round(sum * 0.1 * 100) / 100;
    setTaxes(tax);

    const totalValue = sum + tax + 89;
    setTotal(totalValue);
  }, [cart, items, quantities]);

  // ✅ fixed addInCart
  const addInCart = (id) => {
    setCart((prevCart) => {
      if (!prevCart.includes(id)) {
        if (!toastLock) {
          toastLock = true;
          toast.success("Item added to cart 🍔");
          setTimeout(() => (toastLock = false), 100); // reset lock
        }
        return [...prevCart, id];
      }
      if (!toastLock) {
        toastLock = true;
        toast.success("Item Quantity Increased 🍔");
        setTimeout(() => (toastLock = false), 100);
      }
      return [...prevCart];
    });

    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const deleteInCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item !== id));
    setQuantities((prev) => {
      if (!toastLock) {
        toastLock = true;
        toast.success("Removed from Cart");
        setTimeout(() => (toastLock = false), 100);
      }

      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  // ✅ update food quantity safely
  const updateQuantity = (id, newQty) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, newQty), // at least 1
    }));
  };

  return (
    <BioContext.Provider
      value={{
        myName,
        mySurname,
        value,
        setValue,
        menustatus,
        setMenuStatus,
        cards,
        setCards,
        input,
        setInput,
        cartstatus,
        setCartstatus,
        cart,
        setCart,
        addInCart,
        deleteInCart,
        updateQuantity,
        subTotal,
        setSubTotal,
        taxes,
        setTaxes,
        Total,
        quantities,
        addressStatus,
        setAddressStatus,
        address, 
        setAddress,
        setQuantities
      }}
    >
      {children}
    </BioContext.Provider>
  );
}
