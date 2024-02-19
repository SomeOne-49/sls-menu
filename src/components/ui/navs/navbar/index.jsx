import Image from "next/image";
import Link from "next/link";
import CartNav from "./cart-nav";
import OptionsNav from "./options-nav";
import SearchWrapper from "./search-wrapper";
import SidebarWrapper from "./sidebar-wrapper";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 bg-primary shadow-md z-40">
        <div className="container navbar mx-auto">
          <div className="navbar-start gap-2 ">
            <SidebarWrapper/>
            <OptionsNav />
          </div>
          <div className="navbar-center">
            <Link href="/" className="dark:invert">
              <Image src="/next.svg" alt="next logo" width={100} height={100} />
            </Link>
          </div>
          <div className="navbar-end gap-2">
            <SearchWrapper/>
            <CartNav/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
