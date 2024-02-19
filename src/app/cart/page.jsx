import Checkout from "@/components/cart/checkout";
import OrderTable from "@/components/cart/order-table";
import EmptyCart from "@/components/ui/general/empty-cart";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
const Cart = () => {
  return (
    <div className="py-6">
      <div className="flex flex-col gap-6 mb-8 xl:flex-row">
        <OrderTable />
        <Checkout />
      </div>
      <div className="flex items-center justify-start gap-3">
        <Link
          href="/"
          className="btn btn-primary flex items-center gap-2 text-primary-content"
        >
          <ChevronLeftRoundedIcon />
          <span>Back</span>
        </Link>
        <EmptyCart/>
        
      </div>
    </div>
  );
};

export default Cart;
