const WhatWeOffer3 = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "124"}
      height={height || "159"}
      className={className}
      fill="none"
      viewBox="0 0 124 159"
    >
      <g opacity="0.15">
        <path
          fill="url(#paint0_linear_597_17616)"
          d="M2.503 54.082s-16.745 61.088 39.94 96.704c47.937 30.12 96.351-31.741 60.312-63.29C78.062 65.882 77.418 49.708 75.85 28.618 73.363-4.835 22.108-20.354 2.503 54.082z"
        ></path>
        <path
          fill="#7A4900"
          d="M78.604 90.65h31.697l13.447 10.558-45.144 43.193-45.143-43.193 28.335-9.598 16.808-.96z"
        ></path>
        <path fill="#FFA927" d="M78.606 144.398l-26.893-32.632h53.786l-26.893 32.632z"></path>
        <path
          fill="url(#paint1_linear_597_17616)"
          d="M105.498 111.765l18.25-10.558-45.144-43.193-45.143 43.193 18.25 10.558h53.787z"
        ></path>
        <path
          fill="url(#paint2_linear_597_17616)"
          d="M78.606 58.016l26.893 53.747H51.713l26.893-53.747z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_597_17616"
          x1="0.193"
          x2="133.521"
          y1="0.805"
          y2="18.078"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_597_17616"
          x1="33.461"
          x2="131.092"
          y1="58.014"
          y2="87.186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_597_17616"
          x1="51.713"
          x2="113.121"
          y1="58.016"
          y2="68.947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WhatWeOffer3;
