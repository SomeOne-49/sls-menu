"use client";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

const CartNav = () => {
  const params = usePathname();
  const isCartOpen = params.includes("cart");
  return (
    <>
      {isCartOpen ? (
        <NavLink href="/">
          <div className="indicator">
            <ArrowRightAltRoundedIcon fontSize="small" />
          </div>
        </NavLink>
      ) : (
        <NavLink href="/cart">
          <div className="indicator">
            <ShoppingCartOutlinedIcon fontSize="small" />
          </div>
        </NavLink>
      )}
    </>
  );
};

export default CartNav;
