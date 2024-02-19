"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../../general/overlay";
import Sidebar from "../sidebar";
import BarsNav from "./bars-nav";

const SidebarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  <BarsNav toggleSidebar={toggleSidebar} />;
  return (
    <>
      <BarsNav toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {isOpen &&
        createPortal(
          <Overlay onClick={toggleSidebar} />,
          document.getElementById("overlays"),
        )}
    </>
  );
};

export default SidebarWrapper;
