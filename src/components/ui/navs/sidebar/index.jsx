import SideBody from "./side-body";
import SideHead from "./side-head";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 z-50 h-screen w-80 bg-secondary p-3 shadow-md transition-all duration-500 ${
        isOpen ? "left-0" : "-left-80"
      }`}
    >
      <SideHead toggleSidebar={toggleSidebar} />
      <SideBody />
    </aside>
  );
};

export default Sidebar;
