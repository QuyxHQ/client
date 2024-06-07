const AboutIcon = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "412"}
      height={height || "566"}
      className={className}
      fill="none"
      viewBox="0 0 412 566"
    >
      <path
        fill="url(#paint0_linear_1117_1542)"
        d="M8.267 190.819s-59.94 218.794 142.977 346.357c171.601 107.88 344.911-113.683 215.9-226.679-88.394-77.417-90.699-135.345-96.312-210.88C261.927-20.2 78.45-75.782 8.267 190.82z"
        opacity="0.15"
      ></path>
      <g clipPath="url(#clip0_1117_1542)">
        <path
          fill="url(#paint1_linear_1117_1542)"
          d="M230 463c99.411 0 180-80.589 180-180s-80.589-180-180-180S50 183.589 50 283s80.589 180 180 180z"
        ></path>
        <path
          fill="#7A4900"
          d="M267.815 458.753a179.295 179.295 0 0010.35-2.31 179.793 179.793 0 0017.055-5.7 180.072 180.072 0 0016.425-7.32 179.655 179.655 0 0015.615-8.955 179.855 179.855 0 0014.625-10.47 179.718 179.718 0 0013.53-11.895 179.756 179.756 0 0023.145-27.48 179.885 179.885 0 009.405-15.315 179.773 179.773 0 007.83-16.2 179.861 179.861 0 006.18-16.905 179.845 179.845 0 003.9-15.27L298.97 214.028a97.178 97.178 0 00-68.97-28.53 97.38 97.38 0 00-97.5 97.5c0 26.97 10.905 51.33 28.53 68.97l106.8 106.785h-.015z"
        ></path>
        <path
          fill="#fff"
          d="M230 185.5c53.94 0 97.5 43.56 97.5 97.5s-43.56 97.5-97.5 97.5a97.38 97.38 0 01-97.5-97.5c0-53.94 43.56-97.5 97.5-97.5zm-.525 36.66a7.781 7.781 0 00-6.975 7.5c0 3.915 3.57 7.5 7.5 7.5a7.805 7.805 0 007.5-7.5 7.798 7.798 0 00-8.025-7.5zm.405 28.093a7.758 7.758 0 00-7.38 7.592v78.419a7.804 7.804 0 007.5 7.606 7.8 7.8 0 007.5-7.606v-78.419a7.799 7.799 0 00-7.62-7.592z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1117_1542"
          x1="0"
          x2="477.287"
          y1="0"
          y2="61.803"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1117_1542"
          x1="50"
          x2="461.033"
          y1="103"
          y2="176.118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <clipPath id="clip0_1117_1542">
          <path fill="#fff" d="M0 0H360V360H0z" transform="translate(50 103)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default AboutIcon;
