"use client";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import NavLink from "./nav-link";
const OptionsNav = () => {
  const [viewOptions, setViewOptions] = useState(false);
  const [isEn, setIsEn] = useState(true);
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="relative" onClick={() => setViewOptions((prev) => !prev)}>
      <NavLink >
        <SettingsOutlinedIcon fontSize="small" />
      </NavLink>
      <div
        className={`${
          !viewOptions ? "w-0" : "w-auto"
        } top-0 absolute left-0 flex items-center gap-2 overflow-hidden transition`}
      >
        <NavLink className="font-bold" onClick={() => setIsEn((prev) => !prev)}>
          {isEn ? "AR" : "EN"}
        </NavLink>
        <NavLink onClick={() => setIsLight((prev) => !prev)}>
          {isLight ? (
            <Brightness4OutlinedIcon fontSize="small" />
          ) : (
            <Brightness7OutlinedIcon fontSize="small" />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default OptionsNav;
