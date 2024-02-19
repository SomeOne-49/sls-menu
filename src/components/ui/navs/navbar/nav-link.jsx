import Link from "next/link";

const NavLink = ({ children, className, href, onClick }) => {
  if (href) {
    return (
      <Link
        className={`btn btn-secondary text-secondary-content h-9 min-h-max w-9 ${className || ''}`}
        href={`${href}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn-secondary text-secondary-content h-9 min-h-max w-9 ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavLink;
