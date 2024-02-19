import Image from "next/image";
import Link from "next/link";

const CategoryBox = () => {
  return (
    <div className="px-2 w-1/2 lg:w-1/3 xl:w-1/4">
      <Link href="/products/breakfast">
        <div className="relative mx-auto max-w-[350px] overflow-hidden rounded-2xl border-2 border-primary  h-[45vw] sm:h-72">
          <div className="relative h-full">
            <Image
              className="object-cover"
              src="/test-category.jpeg"
              alt=""
              fill
            />
          </div>
          <div className="absolute bottom-0 left-0 flex w-full items-center gap-2 sm:gap-3 bg-primary bg-opacity-70 px-3 sm:px-5  py-2 sm:py-3 text-center sm:text-start text-primary-content backdrop-blur-sm flex-col sm:flex-row">
            <div className="-mt-10 rounded-2xl border-2 border-secondary-content bg-primary p-4 h-14 w-14 sm:w-24 sm:h-24">
              <Image
                className="dark:invert"
                src="/food-icon.png"
                alt=""
                width={60}
                height={60}
              />
            </div>
            <div>
              <h6 className="font-bold text-hidden">Breackfast</h6>
              <p className="text-sm text-hidden">Meals Count (12)</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryBox;
