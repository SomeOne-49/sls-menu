import Counter from "@/components/ui/general/counter";
import Image from "next/image";

const OrderBox = ({ className }) => {
  return (
    <div className={`p-3 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="relative h-36 w-2/5 overflow-hidden rounded-xl">
          <Image
            src="/test-food.jpeg"
            alt="name"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex-grow">
          <h4 className="mb-3 font-bold">Order Name</h4>
          <ul>
            <li className="relative mb-7 w-fit">
              <Counter className="w-fit" value="1" />
              <span className="absolute -bottom-6 right-1/2 translate-x-1/2 text-xl font-bold ">
                ×
              </span>
            </li>
            <ul className="flex justify-between w-full">
              <li className="relative">
                <p className="rounded-lg px-5 bg-base-200 py-2 font-bold shadow-md xs:w-fit">
                  230 AED
                </p>
                <span className="absolute top-1/2 -translate-y-1/2 -right-6 text-lg font-bold">
                  =
                </span>
              </li>
              <li className="">
                <p className="rounded-lg bg-base-200 px-3 py-2 font-bold shadow-md xs:w-fit">
                  230 AED
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
