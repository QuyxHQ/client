type Coin = "ETH" | "JPY"; // add more...

type Card = {
  image: string;
  title: string;
  status?: string;
  description: string;
  coinType?: Coin;
  price?: number;
  amount?: number;
  additionalClass?: string;
};

export const dashCard: Card[] = [
  {
    image: "/Images/maestro.png",
    description: `The formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true...see more`,
    title: "Blockchain Maester",
  },
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/NFT ART.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "PHP Laver",
    price: 589.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    image: "/Images/-iqXcpqe7HAyniScHBpPIXycN1HAflsWQeLZmz5oNUr3cBDyPXWIModuC1vVi_YbjXYG1gBpptHaSP4LmQzJcHPWIAkWWAruAAHJ.png",
    description: `Badass frontend virtuoso sculpting immersive user experiences with a fusion of code and creativity. With a relentless...see more`,
    title: "React Native",
  },
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/nft art nft monkey nft pfp nft crypto art nft art ideas nft artworks nft aesthetic nft banner nft_ (2).png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "PHP Laver",
    price: 589.25,
    coinType: "ETH",
    amount: 0.024,
  },
];