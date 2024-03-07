const SubscribeLineMobile = ({ width, height, className, fill }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "340"}
      height={height || "162"}
      className={className}
      fill="none"
      viewBox="0 0 340 162"
    >
      <path
        stroke={fill || "#fff"}
        strokeWidth="0.5"
        d="M229 92c35.5 0 72.75-39.346 54.5-58.774-14.559-15.498-38.25 0-28.25 21.5s56.624 42.99 77.75-.001c14.582-29.674 4.5-60.44-22.5-52.439-27 8.001-9.679 87.783-10 102.001-1.5 66.5-68 60.5-95 52.5M230 92H0"
      ></path>
    </svg>
  );
};

export default SubscribeLineMobile;
