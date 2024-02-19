import Image from "next/image";
import Link from "next/link";
import BoxImg from "./box-img";

const CategoryBox = () => {
  return (
    <Link
      href="/"
      className="group relative w-36 flex-shrink-0 overflow-hidden rounded-lg pb-10 shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
      title="Name"
    >
      <BoxImg />
      <div
        className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-center bg-primary p-2 text-center text-primary-content transition-all duration-300
      group-hover:h-full group-hover:bg-secondary  group-hover:text-secondary-content "
      >
        <h4 className="text-md overflow-hidden text-ellipsis">Name</h4>
      </div>
    </Link>
  );
};

export default CategoryBox;
