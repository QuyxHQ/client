const EmptyIcon = ({ width, height, className, fill }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 60}
      height={height || 60}
      className={className}
      version="1.1"
      viewBox="0 0 279.967 279.967"
      xmlSpace="preserve"
    >
      <path
        fill={fill || "currentColor"}
        d="M272.467 161.817a7.5 7.5 0 007.5-7.5V69.458a7.5 7.5 0 00-7.5-7.5H60.907a7.5 7.5 0 00-7.5 7.5V220.58c0 10.441-8.495 18.937-18.937 18.937h-.534C23.495 239.516 15 231.021 15 220.58V40.451h215.204a7.5 7.5 0 000-15H7.5a7.5 7.5 0 00-7.5 7.5V220.58c0 18.713 15.224 33.937 33.937 33.937h201.732c24.426 0 44.299-19.873 44.299-44.299a7.5 7.5 0 00-15 0c0 16.156-13.144 29.299-29.299 29.299H62.619a33.742 33.742 0 005.788-18.937V76.958h196.56v77.359a7.5 7.5 0 007.5 7.5z"
      ></path>
    </svg>
  );
};

export default EmptyIcon;
