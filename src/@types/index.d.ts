type IconProps = {
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
};

type AnchorLinkProps = {
  to: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  handleClick?: () => void;
  title?: string;
  target?: string;
};
