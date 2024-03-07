const WhatWeOffer4 = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "157"}
      height={height || "120"}
      className={className}
      fill="none"
      viewBox="0 0 157 120"
    >
      <rect width="120" height="120" x="21" fill="#fff" fillOpacity="0.1" rx="30"></rect>
      <g clipPath="url(#clip0_597_17622)">
        <path
          fill="url(#paint0_radial_597_17622)"
          d="M107.264 105.788c23.263 0 42.12-18.857 42.12-42.119 0-23.261-18.857-42.118-42.12-42.118-23.262 0-42.12 18.857-42.12 42.118 0 23.262 18.858 42.119 42.12 42.119z"
        ></path>
        <path
          stroke="url(#paint1_linear_597_17622)"
          strokeLinecap="round"
          strokeWidth="4.481"
          d="M152.971 69.941c0 3.962-3.873 7.813-11.013 10.95-7.14 3.136-17.145 5.382-28.451 6.387-11.306 1.005-23.275.712-34.037-.834-10.762-1.546-19.71-4.256-25.445-7.708"
        ></path>
        <path
          stroke="url(#paint2_linear_597_17622)"
          strokeLinecap="round"
          strokeWidth="4.481"
          d="M3.814 18.188l147.762 46.165"
        ></path>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_597_17622"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-133.934 84.504 16.467) scale(82.8785 75.3189)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.62" stopColor="#1B0A22"></stop>
          <stop offset="0.802" stopColor="#A83CD2"></stop>
          <stop offset="0.896" stopColor="#FFDFEE"></stop>
        </radialGradient>
        <linearGradient
          id="paint1_linear_597_17622"
          x1="47.271"
          x2="68.21"
          y1="87.872"
          y2="24.125"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.191" stopColor="#F5BAFF"></stop>
          <stop offset="0.427" stopColor="#F5BAFF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_597_17622"
          x1="3.877"
          x2="17.006"
          y1="18.216"
          y2="-6.669"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.191" stopColor="#BAFBFF"></stop>
          <stop offset="0.427" stopColor="#AFD4F9" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_597_17622">
          <path fill="#fff" d="M0 0H155.981V91.406H0z" transform="translate(.598 14.38)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default WhatWeOffer4;
