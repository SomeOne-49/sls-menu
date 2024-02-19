import OrderBox from "./order-box";

const OrderTable = () => {
  return (
    <div className="rounded-lg border bg-secondary text-secondary-content shadow-lg xl:w-3/4">
      <ul className="flex border-b py-3 px-4 font-bold shadow-lg">
        <li className="w-1/4">Order</li>
        <ul className="w-3/4 ps-5 hidden md:flex">
          <li className="w-1/3">Price</li>
          <li className="w-1/3">Quantity</li>
          <li className="w-1/3">Total</li>
        </ul>
      </ul>
      <div className="max-h-[550px] overflow-auto p-4">
        <OrderBox className="mb-3 border-b pb-3" />
        <OrderBox className="mb-3 border-b pb-3" />
        <OrderBox className="mb-3 border-b pb-3" />
        <OrderBox className="mb-3 border-b pb-3" />
        <OrderBox />
      </div>
    </div>
  );
};

export default OrderTable;
