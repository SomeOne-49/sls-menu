import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";
import InfoBox from "./info-box";

const SideFoo = () => {
  return (
    <div>
      <InfoBox className="grid  place-content-center bg-gradient-to-t from-[#128c7e] to-[#25d366] py-3 text-white">
        <Link href="">
          <WhatsAppIcon fontSize="large" />
        </Link>
      </InfoBox>
      <Link
        href="https://www.vegasds.com"
        className="grid place-content-center"
        target="_blank"
      >
        <Image src="/slsLogo.png" alt="SLS MENU" width={150} height={50} />
      </Link>
    </div>
  );
};

export default SideFoo;
