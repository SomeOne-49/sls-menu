"use client";
import Overlay from "@/components/ui/general/overlay";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import OredersList from "./oreders-list";

const ToggleList = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const toggleDetails = () => {
    setOpenDetails((prev) => !prev);
  };
  return (
    <div className="relative z-10">
      <div className="relative z-30">
        <button
          className={`btn relative z-10 grid h-20 w-20 place-content-center rounded-bl-none rounded-tl-none border-0 bg-primary shadow-xl ${
            openDetails ? "rounded-tr-none" : ""
          }`}
          onClick={toggleDetails}
        >
          <ShoppingBasketRoundedIcon fontSize="large" />
        </button>
        <Link
          href="/cart"
          className={`btn btn-primary absolute right-full top-0  flex h-20 items-center overflow-hidden rounded-br-none rounded-tr-none transition-all duration-300 ease-linear ${
            openDetails ? "w-80 rounded-tl-none px-4 " : "w-0 px-0 delay-300"
          }`}
        >
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShoppingBasketRoundedIcon fontSize="large" />
              <span>Show Cart</span>
            </div>
            <ChevronRightRoundedIcon />
          </div>
        </Link>
      </div>
      <OredersList openDetails={openDetails} />
      {openDetails &&
        createPortal(
          <Overlay className="z-50" onClick={toggleDetails} />,
          document.getElementById("overlays"),
        )}
    </div>
  );
};

export default ToggleList;
