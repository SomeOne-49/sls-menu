"use client";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useState } from "react";
const Counter = ({ className, value }) => {
  const [quantity, setQuantity] = useState(value);
  const moreOne = quantity > 0;
  const increment = () => {
    if (quantity < 99) setQuantity((prev) => ++prev);
  };
  const decrement = () => {
    if (moreOne) setQuantity((prev) => --prev);
  };
  const handleInputChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <div
      className={`relative mb-1 flex h-10 items-center justify-center ${className}`}
    >
      <div
        className={`relative z-20 -me-10 grid h-10 min-h-0 w-10 cursor-pointer place-content-center rounded-lg bg-secondary p-0 text-secondary-content shadow-md transition-all duration-700 hover:bg-success hover:text-white ${
          moreOne && "-me-2"
        } `}
        onClick={increment}
      >
        <AddRoundedIcon />
      </div>
      <input
        className={`relative z-0 h-10  w-10 rounded-lg bg-secondary text-center font-bold text-secondary-content transition-all duration-700 ${
          moreOne && "w-12 rounded-none"
        }`}
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        onInput={handleInputChange}
      />
      <div
        className={`relative z-10  -ms-10 grid h-10 min-h-0 w-10 cursor-pointer place-content-center rounded-lg bg-secondary p-0 text-secondary-content shadow-md transition-all duration-700 hover:bg-error hover:text-white ${
          moreOne && "-ms-2 "
        } `}
        onClick={decrement}
      >
        {quantity > 1 ? <RemoveRoundedIcon /> : <DeleteIcon />}
      </div>
    </div>
  );
};

export default Counter;
