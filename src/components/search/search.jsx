"use client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import ProductBox from "../product/product-box";

const Search = ({ isSearchOpen }) => {
  const [search, setSearch] = useState("");
  const handelSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchFor = (val) => {
    setSearch(val);
  };
  return (
    <div className="fixed left-1/2 top-20 z-30 mx-auto w-[95vw] max-w-5xl -translate-x-1/2 animate-[popup-scale_0.5s_ease-in-out] overflow-hidden rounded-xl bg-primary/95 p-4 text-primary-content shadow-lg ">
      <div className="relative mb-4">
        <input
          type="search"
          name=""
          id=""
          value={search}
          className="input input-bordered w-full ps-14 text-lg"
          onChange={handelSearch}
          placeholder="Finde Any Thing..."
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <SearchOutlinedIcon fontSize="large" color="primary" />
        </div>
      </div>
      <ul className="flex flex-wrap gap-y-4 px-4">
        <li
          className=" w-full  md:w-1/2 md:px-2"
          onClick={() => searchFor("some val")}
        >
          <button className="borde-b group relative flex w-full items-center gap-2 overflow-hidden border-b-2  border-secondary pb-2 text-xl">
            <div className="-ms-6 transition-all duration-300 group-hover:ms-0">
              <SearchOutlinedIcon />
            </div>
            <span>Breakfast foods.</span>
          </button>
        </li>
        <li
          className=" w-full  md:w-1/2 md:px-2"
          onClick={() => searchFor("some val")}
        >
          <button className="borde-b group relative flex w-full items-center gap-2 overflow-hidden border-b-2  border-secondary pb-2 text-xl">
            <div className="-ms-6 transition-all duration-300 group-hover:ms-0">
              <SearchOutlinedIcon />
            </div>
            <span>Breakfast foods.</span>
          </button>
        </li>
        <li
          className=" w-full  md:w-1/2 md:px-2"
          onClick={() => searchFor("some val")}
        >
          <button className="borde-b group relative flex w-full items-center gap-2 overflow-hidden border-b-2  border-secondary pb-2 text-xl">
            <div className="-ms-6 transition-all duration-300 group-hover:ms-0">
              <SearchOutlinedIcon />
            </div>
            <span>Breakfast foods.</span>
          </button>
        </li>
        <li
          className=" w-full  md:w-1/2 md:px-2"
          onClick={() => searchFor("some val")}
        >
          <button className="borde-b group relative flex w-full items-center gap-2 overflow-hidden border-b-2  border-secondary pb-2 text-xl">
            <div className="-ms-6 transition-all duration-300 group-hover:ms-0">
              <SearchOutlinedIcon />
            </div>
            <span>Breakfast foods.</span>
          </button>
        </li>
        <li
          className=" w-full  md:w-1/2 md:px-2"
          onClick={() => searchFor("some val")}
        >
          <button className="borde-b group relative flex w-full items-center gap-2 overflow-hidden border-b-2  border-secondary pb-2 text-xl">
            <div className="-ms-6 transition-all duration-300 group-hover:ms-0">
              <SearchOutlinedIcon />
            </div>
            <span>Breakfast foods.</span>
          </button>
        </li>
        <li
          className=" w-full  md:w-1/2 md:px-2"
          onClick={() => searchFor("some val")}
        >
          <button className="borde-b group relative flex w-full items-center gap-2 overflow-hidden border-b-2  border-secondary pb-2 text-xl">
            <div className="-ms-6 transition-all duration-300 group-hover:ms-0">
              <SearchOutlinedIcon />
            </div>
            <span>Breakfast foods.</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Search;
