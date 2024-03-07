const Features1 = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "401"}
      height={height || "484"}
      className={className}
      fill="none"
      viewBox="0 0 401 484"
    >
      <path
        fill="#7A4900"
        d="M240.154 209.36h97.078l41.184 32.335-138.262 132.29-138.262-132.29 86.782-29.396 51.48-2.939z"
      ></path>
      <path fill="#FFA927" d="M240.158 373.977l-82.367-99.945h164.733l-82.366 99.945z"></path>
      <path
        fill="url(#paint0_linear_597_17766)"
        d="M322.522 274.028l55.894-32.335-138.262-132.29-138.262 132.29 55.893 32.335h164.737z"
      ></path>
      <path
        fill="url(#paint1_linear_597_17766)"
        d="M240.157 109.409l82.366 164.615H157.791l82.366-164.615z"
      ></path>
      <path
        fill="url(#paint2_linear_597_17766)"
        d="M55.476 163.17S4.192 350.266 177.803 459.349c146.817 92.25 295.095-97.213 184.717-193.839-75.627-66.201-77.599-115.737-82.401-180.328C272.5-17.278 115.522-64.807 55.476 163.17z"
        opacity="0.15"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_597_17766"
          x1="101.892"
          x2="400.909"
          y1="109.403"
          y2="198.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_597_17766"
          x1="157.791"
          x2="345.867"
          y1="109.409"
          y2="142.889"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_597_17766"
          x1="48.403"
          x2="456.749"
          y1="-0.003"
          y2="52.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Features1;
