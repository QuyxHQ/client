type Coin = "ETH" | "JPY"; // add more...

type Card = {
  image: string;
  status?: string;
  title: string;
  description: string;
  coinType?: Coin;
  price?: number;
  amount?: number;
  additionalClass?: string;
};

export const dashCard: Card[] = [
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/nft art nft monkey nft pfp nft crypto art nft art ideas nft artworks nft aesthetic nft banner nft_ (2).png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "PHP Laver",
    price: 589.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/guy.png",
    description: `Badass frontend virtuoso sculpting immersive user experiences with a fusion of code and creativity. With a relentless...see more`,
    title: "React Native",
    price: 819.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/Daft Punk Toy Face NFT.png",
    description: `Badass frontend virtuoso sculpting immersive user experiences with a fusion of code and creativity. With a relentless...see more`,
    title: "Ghost writer",
    price: 5.04,
    coinType: "ETH",
    amount: 0.024,
  },
];