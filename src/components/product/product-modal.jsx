import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import Image from "next/image";
import Counter from "../ui/general/counter";
const ProductModal = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-3xl hide-scroll">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-1 top-1 font-bold">
              <CloseRoundedIcon />
            </button>
          </form>
          <div className="mb-4 flex flex-col gap-y-4 sm:flex-row">
            <div className="sm:w-2/5 sm:pe-2">
              <div className="relative mx-auto h-[45vw] xs:h-60 max-w-sm overflow-hidden rounded-xl">
                <Image
                  src="/test-category.jpeg"
                  className="object-cover"
                  alt="name"
                  fill
                />
              </div>
            </div>
            <div className="sm:w-3/5 sm:ps-2">
              <div className="relative">
                <button className="btn btn-primary absolute right-0 top-6 h-9 min-h-0 w-9 shadow-lg ">
                  <ShareRoundedIcon fontSize="small" />
                </button>
                <p className="mb-1 text-sm font-semibold text-primary">
                  Product Category
                </p>
                <h3 className="mb-2 w-[calc(100%-36px)] text-xl font-bold">
                  Product Name here
                </h3>
                <p className="text-sm text-secondary-content">
                  Product Discription Here
                </p>
              </div>
            </div>
          </div>
          <div className="border-y-2 border-dashed pb-2 pt-3">
            <ul className="xs:flex-row mb-4 flex flex-col items-center gap-y-8 max-w-xl">
              <li className="xs:w-1/3 relative ">
                <p className="xs:w-fit rounded-lg bg-base-200 px-5 py-2 font-bold shadow-md">
                  230 AED
                </p>
                <span className="xs:bottom-auto xs:right-10 xs:top-1/2 xs:-translate-y-1/2 absolute -bottom-8  right-1/2  translate-x-1/2  font-bold">
                  X
                </span>
              </li>
              <li className="xs:w-1/3 relative">
                <Counter className="w-fit" value="1" />
                <span className="xs:bottom-auto xs:right-10 xs:top-1/2 xs:-translate-y-1/2 absolute -bottom-7  right-1/2  translate-x-1/2 text-lg font-bold">
                  =
                </span>
              </li>
              <li className="xs:w-1/3">
                <p className="xs:w-fit rounded-lg bg-base-200 px-5 py-2 font-bold shadow-md">
                  230 AED
                </p>
              </li>
            </ul>
            <div className="flex flex-wrap items-end gap-3">
              <div className="w-full xs:w-[calc(100%-200px)]">
                <textarea
                  className="textarea textarea-bordered h-12 w-full resize-none text-sm leading-4"
                  placeholder="Your Notes..."
                ></textarea>
              </div>
              <div className="flex-grow pb-2">
                <button className="btn btn-primary  w-full rounded-badge px-7">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ProductModal;
