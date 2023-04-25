"use client";

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/all";

type RateProps = {
  rate: number;
};

function Rate({ rate }: RateProps) {
  const [rating, setRating] = useState(rate);

  // Catch Rate value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);
  return (
    <Rating
      onClick={handleRating}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      fillIcon={<FaStar className={"w-4 h-4 text-yellow-300"} />}
      emptyIcon={<FaStar className={"w-4 h-4 text-gray-300"} />}
      className={"flex "}
    />
  );
}

export default Rate;
