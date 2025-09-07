import React, { useContext } from "react";
import { BioContext } from "../ContextApi/text";

const ContextTest2 = () => {
  const { myName, mySurname, value , setValue} = useContext(BioContext);
  return (
    <h1 className="flex space-x-4 justify-start items-center">
      <div>
        My Name is {myName} and Surname is {mySurname} and the value is {value}
      </div>
      <button className="btn btn-sm btn-accent" onClick={()=>{setValue(value+1)}}>Click</button>
    </h1>
  );
};

export default ContextTest2;
