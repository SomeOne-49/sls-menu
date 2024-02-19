import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Link from "next/link";
import InfoBox from "./info-box";
import SideFoo from "./side-foo";

const SideBody = () => {
  const workDays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
  ];
  return (
    <div className="hide-scroll pt-4 h-[calc(100%-7rem)] overflow-auto flex flex-col justify-between">
      <div>
        <InfoBox>
          <Link href="https://www.vegasds.com" target="_blank">
            <div className="mb-3 flex items-center gap-2 text-neutral">
              <LocationOnOutlinedIcon fontSize="small" />
              <p>Location</p>
            </div>
            <p className="ps-2 font-bold">Dubai</p>
          </Link>
        </InfoBox>
        <InfoBox>
          <Link href="tel:00905399601926" target="_blank">
            <div className="mb-3 flex items-center gap-2 ps-2 text-neutral">
              <LocalPhoneOutlinedIcon fontSize="small" />
              <p>Tel</p>
            </div>
            <p className="ps-2 font-bold">&#x200E; +90 539 960 19 26</p>
          </Link>
        </InfoBox>
        <InfoBox>
          <div className="mb-3 flex items-center gap-2 ps-2 text-neutral">
            <CalendarMonthOutlinedIcon fontSize="small" />
            <p>Work Days</p>
          </div>
          <ul className="ps-2 font-bold">
            {workDays.map((day, i) => (
              <li key={i}>{day}</li>
            ))}
          </ul>
        </InfoBox>
        <InfoBox>
          <div className="mb-3 flex items-center gap-2 ps-2 text-neutral">
            <AccessAlarmOutlinedIcon fontSize="small" />
            <p>Work Hour</p>
          </div>
          <ul className="ps-2 font-bold">
            <li>
              <span>Start time: </span>
              <span>08:00</span>
            </li>
            <li>
              <span>End time: </span>
              <span>08:00</span>
            </li>
          </ul>
        </InfoBox>
      </div>
      <SideFoo />
    </div>
  );
};

export default SideBody;
