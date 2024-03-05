type QuyxUser = Base & {
  username: string;
  email: string | null;
  hasCompletedKYC: boolean;
  hasBlueTick: boolean;
  changedUsernameLastOn: Date;
  address: string;
  pfp: string | null;
  cardsCreatedCount: {
    chainId: string;
    count: number;
  }[];
  cardsSoldCount: {
    chainId: string;
    count: number;
  }[];
  cardsBoughtCount: {
    chainId: string;
    count: number;
  }[];
  emailVerificationCode: string | null;
  emailVerificationCodeExpiry: Date | null;
  boughtCards: {
    chainId: string;
    cards: string[];
  }[];
  soldCards: {
    chainId: string;
    cards: string[];
  }[];
};

type QuyxCard = Base & {
  owner: QuyxUser;
  identifier: null | number;
  version: number;
  chainId: (typeof QUYX_NETWORKS)[number];
  mintedBy: string;
  tempToken: string;
  username: string;
  pfp: string;
  bio: string;
  description: stirng | null;
  isForSale: boolean;
  isAuction: boolean | null;
  listingPrice: number | null;
  maxNumberOfBids: number | null;
  auctionEnds: Date | null;
  tags: string[] | null;
  isFlagged: boolean;
  isDeleted: boolean;
};

type QuyxApp = Base & {};

type QuyxReferral = Base & {
  user: QuyxUser;
  card: QuyxCard;
  clicks: number;
  isActive: boolean;
  won: boolean;
  bidsPlaced: number;
};

type QuyxBookmark = Base & {
  user: string;
  card: QuyxCard;
};

type QuyxBid = Base & {
  card: QuyxCard;
  version: number;
  bidder: string;
  price: number;
  timestamp: Date;
};

type ApiResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

type ApiPaginationResponse<T> = {
  status: boolean;
  message: string;
  data: T;
  pagination: {
    page: number;
    limit: number;
    skip: number;
    total: number;
  };
};

type Base = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const QUYX_CHAINS = ["97"] as const;

type ListCardProps = {
  cardIdentifier: number;
  isAuction: boolean;
  listingPrice: string;
  maxNumberOfBids: string;
};

type BuyCardProps = {
  cardIdentifier: number;
  referredBy?: string;
};

type AppContextProps = {
  isMounting: boolean;
  isLoggedIn: boolean;
  displayModal: boolean;
  openModal: (canClose?: boolean) => void;
  closeModal: () => void;
  isWalletConnected?: boolean;
  userInfo?: QuyxUser;
  address?: string;
  chainId?: number;
  canCloseModal: boolean;
  QUYX_METADATA?: QUYX_METADATA_OBJ;
  isNetworkSupported: boolean;
  switchChain: (chainId: number) => Promise<void>;
  modalBody?: React.JSX.Element;
  setModalBody: (value: React.JSX.Element | undefined) => void;
};

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

type useQueryProps<T> = {
  queryFn: (page: number, options?: { [key: string]: any }) => Promise<ApiPaginationResponse<T[]>>;
  options?: { [key: string]: any };
};

type QUYX_METADATA_OBJ = {
  isPaused: boolean;
  maxCardPerAddress: number;
  extraCardPrice: number;
  protocolFeePercent: number;
  referralFeePercent: number;
  user?: { cardsCount: number };
};
