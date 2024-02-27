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
    username: "React",
    profileImage: "/Images/Avatars/react.png",
    image: "/Images/react.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@React",
    saleTag: "/Images/ForSale.svg",
    price: null,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "code cipher",
    profileImage: "/Images/Avatars/cipher.png",
    image: "/Images/cipher.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Code Cipher",
    saleTag: "/Images/ForSale.svg",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "Ghost Writer",
    profileImage: "/Images/Avatars/ghost.png",
    image: "/Images/ghost.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Ghost Writer",
    saleTag: "/Images/ForSale.svg",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "PHP Dude",
    profileImage: "/Images/Avatars/php.png",
    image: "/Images/php.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@PHP Dude",
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
    title: "@Moyinthegrait",
    price: null,
    saleTag: null,
    coinType: "ETH",
    amount: 0.024,
  },
];
