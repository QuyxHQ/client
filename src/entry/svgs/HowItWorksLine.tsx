const HowItWorksLine = ({ className, height }: Omit<IconProps, "fill" | "width">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1"
      height={height || "196"}
      className={className}
      fill="none"
      viewBox="0 0 1 196"
    >
      <path stroke="url(#paint0_linear_597_17469)" d="M0.5 0L0.5 196"></path>
      <defs>
        <linearGradient
          id="paint0_linear_597_17469"
          x1="0"
          x2="0"
          y1="196"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.005" stopColor="#C9F" stopOpacity="0"></stop>
          <stop offset="0.495" stopColor="#C9F"></stop>
          <stop offset="1" stopColor="#C9F" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HowItWorksLine;
