import Image from "next/image";
import React from "react";
import Counter from "../ui/general/counter";

const OrderBox = ({ className }) => {
  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      <div className="xs:w-1/2 relative mx-auto  mb-3 h-[45vw] w-full overflow-hidden rounded-xl sm:h-48 md:mb-0 md:h-auto  md:w-1/4">
        <Image src="/test-food.jpeg" alt="name" fill className="object-cover" />
      </div>
      <div className="ps-5 md:w-3/4">
        <h3 className="mb-3 text-lg font-bold">oreder name</h3>
        <ul className="xs:flex-row mb-4 flex flex-col items-center gap-y-8">
          <li className="xs:w-1/3 relative ">
            <p className="xs:w-fit rounded-lg bg-base-200 px-5 py-2 font-bold shadow-md">
              230 AED
            </p>
            <span className="xs:bottom-auto xs:right-10 xs:top-1/2 xs:-translate-y-1/2 absolute -bottom-8  right-1/2  translate-x-1/2  font-bold">
              ×
            </span>
          </li>
          <li className="xs:w-1/3 relative">
            <Counter className="w-fit" value="1" />
            <span className="xs:bottom-auto xs:right-10 xs:top-1/2 xs:-translate-y-1/2 absolute -bottom-7  right-1/2  translate-x-1/2 text-lg font-bold">
              =
            </span>
          </li>
          <li className="xs:w-1/3">
            <p className="xs:w-fit rounded-lg bg-base-200 px-5 py-2 font-bold shadow-md">
              230 AED
            </p>
          </li>
        </ul>
        <textarea
          className="textarea textarea-bordered h-12 w-full resize-none text-sm leading-4"
          placeholder="Your Notes..."
        ></textarea>
      </div>
    </div>
  );
};

export default OrderBox;
