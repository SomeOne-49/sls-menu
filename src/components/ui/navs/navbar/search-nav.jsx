import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavLink from "./nav-link";

const SearchNav = ({isSearchOpen,setIsSearchOpen }) => {
  return (
    <NavLink onClick={setIsSearchOpen}>
      {isSearchOpen ? (
        <CloseRoundedIcon fontSize="small" />
      ) : (
        <SearchOutlinedIcon fontSize="small" />
      )}
    </NavLink>
  );
};

export default SearchNav;
