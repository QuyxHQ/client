const WhatWeOffer3 = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "234"}
      height={height || "276"}
      className={className}
      fill="none"
      viewBox="0 0 234 276"
    >
      <rect width="120" height="120" x="59" y="53" fill="#fff" fillOpacity="0.1" rx="30"></rect>
      <path
        fill="#7A4900"
        d="M137.604 122.65h31.697l13.447 10.558-45.144 43.193-45.143-43.193 28.335-9.598 16.808-.96z"
      ></path>
      <path fill="#FFA927" d="M137.606 176.398l-26.893-32.632h53.786l-26.893 32.632z"></path>
      <path
        fill="url(#paint0_linear_597_17610)"
        d="M164.498 143.765l18.25-10.558-45.144-43.193-45.143 43.193 18.25 10.558h53.787z"
      ></path>
      <path
        fill="url(#paint1_linear_597_17610)"
        d="M137.606 90.016l26.893 53.747h-53.786l26.893-53.747z"
      ></path>
      <path
        fill="url(#paint2_linear_597_17610)"
        d="M61.503 86.082s-16.745 61.088 39.94 96.704c47.937 30.12 96.351-31.741 60.312-63.29-24.693-21.614-25.337-37.788-26.905-58.878-2.488-33.453-53.742-48.972-73.347 25.464z"
        opacity="0.15"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_597_17610"
          x1="92.461"
          x2="190.092"
          y1="90.014"
          y2="119.186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_597_17610"
          x1="110.713"
          x2="172.121"
          y1="90.016"
          y2="100.947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_597_17610"
          x1="59.193"
          x2="192.521"
          y1="32.805"
          y2="50.078"
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
