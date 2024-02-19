"use client";
import Search from "@/components/search/search";
import { useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../../general/overlay";
import SearchNav from "./search-nav";

const SearchWrapper = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };
  return (
    <div>
      <SearchNav isSearchOpen={isSearchOpen} setIsSearchOpen={toggleSearch} />
      {isSearchOpen && (
        <>
          <Search isSearchOpen={isSearchOpen} />
          {createPortal(
            <Overlay onClick={toggleSearch} />,
            document.getElementById("overlays"),
          )}
        </>
      )}
    </div>
  );
};

export default SearchWrapper;
