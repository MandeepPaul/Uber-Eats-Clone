const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      className={`py-2 h-[35px] md:h-[37px] lg:h-[40px] xl:h-[45px] ${className}`}
      alt="Uber_Eats Logo"
      src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
    />
  );
};

export default Logo;
