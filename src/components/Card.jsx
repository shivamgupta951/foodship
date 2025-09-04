import React from "react";
import image1 from "../assets/image1.avif";
const Card = () => {
  return (
    <div>
      <div>
        <img
          src={image1}
          alt="image"
          className="size-16 mx-4 rounded-lg md:size-16 lg:size-18"
        />
      </div>
    </div>
  );
};

export default Card;
