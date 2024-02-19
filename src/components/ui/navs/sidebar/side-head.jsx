import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../navbar/nav-link";

const SideHead = ({toggleSidebar}) => {
  return (
    <div className="relative grid min-h-24 max-h-28 place-content-center rounded-lg bg-primary p-5">
      <NavLink className="absolute -right-2 -top-2" onClick={toggleSidebar}>
        <KeyboardBackspaceOutlinedIcon />
      </NavLink>
      <Link className="mx-auto w-fit dark:invert" href='/'>
        <Image src="/next.svg" alt="next logo" width={100} height={100} />
      </Link>
    </div>
  );
};

export default SideHead;
