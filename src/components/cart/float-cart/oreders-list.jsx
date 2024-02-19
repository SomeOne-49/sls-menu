import EmptyCart from "@/components/ui/general/empty-cart";
import OrderBox from "./order-box";

const OredersList = ({openDetails}) => {
  return (
    <div className={`absolute bottom-20 z-0 right-0 w-[25rem] rounded-tl-xl rounded-tr-xl shadow bg-secondary overflow-hidden ${openDetails ? "h-96 delay-300" : 'h-0 '} transition-all duration-300  `}  >
      <div className="p-3 flex items-center justify-between border-b">
        <h4 className="text-lg font-bold">
          Orders (2):
        </h4>
        <EmptyCart/>
      </div>
      <div className="overflow-auto max-h-[calc(100%-72px)]">
        <OrderBox className='border-b mb-3' />
        <OrderBox className='border-b mb-3' />
        <OrderBox className='border-b mb-3' />
        <OrderBox  />
      </div>
    </div>
  )
}

export default OredersList