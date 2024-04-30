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

type QuyxUser = {
  _id: string;
  username: string;
  hasBlueTick: boolean;
  address: string;
  pfp: null | string;
  bio: null | string;
  twitterLink: null | string;
  youtubeLink: null | string;
  instagramLink: null | string;
  otherLink: null | string;
  createdAt: string;
  updatedAt: string;
};

type Pagination = {
  page: number;
  limit: number;
  skip: number;
  total: number;
};

type NftScanResponse<T> = {
  code: number;
  msg?: string;
  data: T;
};

type NftScanByAccountResponse = NftScanResponse<{
  next: string;
  total: number;
  content: {
    block_number: number;
    content_type: string;
    content_uri: string;
    contract_address: string;
    contract_name: string;
    description: string;
    external_link: string;
    image_url: string;
    latest_trade_price: number;
    latest_trade_timestamp: number;
    latest_trade_transaction_hash: string;
    metadata_json: string;
    mint_price: number;
    mint_timestamp: number;
    mint_transaction_hash: string;
    minter: string;
    name: string;
    owner: string;
    token_address: string;
    token_id: string;
    token_uri: string;
  }[];
}>;

type NftScanNftTxResponse = NftScanResponse<{
  next: string;
  total: number;
  content: {
    block_number: number;
    contract_address: string;
    contract_name: string;
    destination: string;
    event_type: string;
    fee: number;
    hash: string;
    nftscan_tx_id: string;
    source: string;
    timestamp: number;
    token_address: string;
    token_id: string;
    trade_price: number;
  }[];
}>;
