const Overlay = ({ className, onClick }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full z-40 w-full cursor-pointer backdrop-blur-sm bg-primary/50 animate-[popup-opacity_0.5s_ease-in-out] ${className}`}
      onClick={onClick}
    >
    </div>
  );
};

export default Overlay;
