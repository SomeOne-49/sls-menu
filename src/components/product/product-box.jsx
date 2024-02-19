"use client";
import Image from "next/image";
import React from "react";
import { createPortal } from "react-dom";
import Counter from "../ui/general/counter";
import ProductModal from "./product-modal";

const ProductBox = () => {
  const openDetails = () => {document.getElementById("my_modal_2").showModal()};
  return (
    <div className="w-1/3 px-2 md:w-1/4 xl:w-1/5 2xl:w-1/6 ">
      <div className="relative h-[28vw] overflow-hidden rounded-xl sm:h-40 lg:h-56 xl:h-44 cursor-pointer" onClick={openDetails}>
        <Image src="/test-food.jpeg" alt="name" fill className="object-cover text-whi" />
      </div>
      <Counter className="-mt-5" value={0} />
      <div>
        <p className="mb-1 line-clamp-2 h-12 overflow-hidden text-ellipsis text-primary sm:text-lg sm:leading-6 cursor-pointer" onClick={openDetails}>
          pro name here pro name here
        </p>
        <p className="font-bold">20 ADE</p>
      </div>
      <ProductModal />
    </div>
  );
};

export default ProductBox;
