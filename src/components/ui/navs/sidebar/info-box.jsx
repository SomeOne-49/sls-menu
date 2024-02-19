const InfoBox = ({ children, className }) => {
  return (
    <div className={`rounded-lg bg-secondary text-secondary-content p-2 shadow-md hover:shadow-sm transition-shadow mb-4 ${className}`}>
      {children}
    </div>
  );
};

export default InfoBox;
