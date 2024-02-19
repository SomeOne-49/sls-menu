import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";
import TelInput from "../ui/general/tel-input";
import InfoBox from "../ui/navs/sidebar/info-box";
import PaymentMethods from "./payment-methods";
const Checkout = () => {
  return (
    <div className="rounded-lg border bg-secondary text-secondary-content shadow-lg xl:w-3/4 w-full xs:max-w-sm xs:ms-auto">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <p className="font-semibold">Total</p>
        <h4 className="font-bold">323 AED</h4>
      </div>
      <PaymentMethods />
      <div className="flex items-center justify-between border-b px-4 py-3">
        <p className="font-semibold">Type of Request</p>
        <div className="flex items-center gap-2">
          <Image src="/home.svg" alt="home" width={20} height={20} />
          <p className="font-semibold">delivery</p>
        </div>
      </div>
      <div className="border-b px-4 py-3">
        <h5 className="mb-3 font-semibold">General Notes:</h5>
        <textarea
          className="textarea textarea-bordered h-16 w-full resize-none text-sm leading-4"
          placeholder="Your Notes..."
        ></textarea>
      </div>
      <div className="border-b px-4 py-3">
        <h5 className="mb-3 font-semibold">Phone Number:</h5>
        <TelInput defaultCountry="DE" className='text-secondary-content' />
      </div>
      <div className="px-4 py-3">
          <Link className="flex gap-3 items-center justify-center border bg-gradient-to-r from-[#13907c] to-[#25d067] py-3 text-white rounded-lg overflow-hidden" href="">
            <WhatsAppIcon fontSize="large" />
            <span className="font-semibold text-lg ">Send order by Whatsapp</span>
          </Link>
      </div>
    </div>
  );
};

export default Checkout;
