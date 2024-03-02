const MenuIcon = ({ width, height, fill, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12h18M3 6h18M3 18h18"
      ></path>
    </svg>
  );
};

export default MenuIcon;
