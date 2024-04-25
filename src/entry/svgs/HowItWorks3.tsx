const HowItWorks3 = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "245.85"}
      height={height || "165"}
      className={className}
      fill="none"
      viewBox="0 0 278 187"
    >
      <rect width="277" height="153" x="0.5" y="0.5" fill="#111" stroke="#555" rx="7.5"></rect>
      <rect width="223" height="139" x="27.5" y="47.5" fill="#171A25" rx="4.5"></rect>
      <rect width="223" height="139" x="27.5" y="47.5" stroke="#888" rx="4.5"></rect>
      <path fill="#111" d="M46.5 80.5H231.5V123.5H46.5z"></path>
      <path stroke="#555" d="M46.5 80.5H231.5V123.5H46.5z"></path>
      <path fill="#404040" d="M0 0H20V20H0z" transform="translate(58 92)"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="0.667"
        d="M73.333 98.666l-3.594 4.313c-1.424 1.709-2.136 2.563-3.073 2.563-.936 0-1.648-.854-3.072-2.563l-.928-1.112"
      ></path>
      <path fill="#404040" d="M86 92H210V96H86z"></path>
      <path fill="#404040" d="M86 100H220V104H86z"></path>
      <path fill="#404040" d="M86 108H191V112H86z"></path>
      <path fill="#111" d="M46.5 132.5H231.5V175.5H46.5z"></path>
      <path stroke="#555" d="M46.5 132.5H231.5V175.5H46.5z"></path>
      <path fill="#404040" d="M0 0H20V20H0z" transform="translate(58 144)"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="0.667"
        d="M73.333 150.667l-3.594 4.312c-1.424 1.709-2.136 2.563-3.073 2.563-.936 0-1.648-.854-3.072-2.563l-.928-1.112"
      ></path>
      <path fill="#404040" d="M86 144H210V148H86z"></path>
      <path fill="#404040" d="M86 152H220V156H86z"></path>
      <path fill="#404040" d="M86 160H191V164H86z"></path>
      <path fill="#31374F" d="M0 0H222V16H0z" transform="translate(28 48)"></path>
      <circle cx="36" cy="56" r="2" fill="#171A25"></circle>
      <circle cx="43" cy="56" r="2" fill="#171A25"></circle>
      <circle cx="50" cy="56" r="2" fill="#171A25"></circle>
    </svg>
  );
};

export default HowItWorks3;
