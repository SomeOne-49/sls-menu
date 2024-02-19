import FloatCart from "@/components/cart/float-cart/float-cart";
import ProductBox from "@/components/product/product-box";
import CategoriesBar from "@/components/ui/navs/category-nav";
import { createPortal } from "react-dom";

const Products = () => {
  return (
    <>
      <CategoriesBar />
      <div className="mb-5 flex flex-wrap items-center gap-y-3">
        <ProductBox />
        {/* <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/> */}
      </div>
      <FloatCart />
    </>
  );
};

export default Products;
