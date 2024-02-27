type Coin = "ETH" | "JPY"; // add more...

type Card = {
  profileImage: string;
  username: string;
  image: string;
  title: string;
  description: string;
  price: number | null;
  coinType: Coin;
  saleTag: string | null;
  additionalClass?: string;
  amount: number;
};

export const cardData: Card[] = [
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    saleTag: "/Images/ForSale.svg",
    price: null,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/codeforge.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    saleTag: "/Images/ForSale.svg",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/maestro.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    saleTag: "/Images/ForSale.svg",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "@moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    saleTag: null,
    price: null,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    saleTag: "/Images/ForSale.svg",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/codeforge.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: null,
    saleTag: null,
    coinType: "ETH",
    amount: 0.024,
  },
];