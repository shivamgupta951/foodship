// src/ContextApi/BioContext.jsx
import { createContext, useState } from "react";

// 1. Create the context (default export is cleaner for objects)
export const BioContext = createContext(null);

// 2. Create the provider component
export function BioProvider({ children }) {
  const myName = "Shivam";
  const mySurname = "Gupta";
  const [menustatus, setMenuStatus] = useState(false);
  const [value, setValue] = useState(1);

  return (
    <BioContext.Provider
      value={{
        myName,
        mySurname,
        value,
        setValue,
        menustatus,
        setMenuStatus,
      }}
    >
      {children}
    </BioContext.Provider>
  );
}
