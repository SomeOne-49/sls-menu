"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BoxImg = () => {
  const [hideImg, setHideImg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >=1) {
        setHideImg(true);
      } else {
        setHideImg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        hideImg ? "h-0 " : "h-20 "
      }`}
    >
      <Image
        src="/test-food.jpg"
        alt="category-name"
        width={144}
        height={80}
        className="h-[80px] object-cover"
      />
    </div>
  );
};

export default BoxImg;
