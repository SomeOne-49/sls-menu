import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Image from "next/image";
const Dropup = () => {
  return (
    <div className="dropdown dropdown-top ">
      <div
        tabIndex={0}
        role="button"
        className="btn flex h-20 w-20 items-center gap-2 rounded-br-none  rounded-tr-none border-0 bg-black p-0 text-white hover:bg-black active:bg-black"
      >
        <Image src="/home.svg" alt="home" width={20} height={20} />
        <KeyboardArrowUpRoundedIcon />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-40 rounded-lg bg-base-100 p-2 shadow  "
      >
        <li>
          <button className="flex items-center gap-2 px-2">
            <Image src="/home.svg" alt="home" width={20} height={20} />
            <span>At The Home</span>
          </button>
        </li>
        <li className="pt-1 border-t mt-1">
          <button className="flex items-center gap-2 px-2">
            <Image src="/store.svg" alt="home" width={20} height={20} />
            <span>In The Store</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropup;
