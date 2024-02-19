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
    
    image: "/Images/NFT ART.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels...see more`,
    title: "PHP Laver",
    price: 589.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    image: "/Images/ddss.png",
    description: `A formidable cyber security expert whose expertise transcends the digital battlefield. With a relentless commitment to safeguarding the virtual...see more`,
    title: "Cipher Guardian",
    price: 603.15,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/dhdhd.png",
    description: `A formidable cyber security expert whose expertise transcends the digital battlefield. With a relentless commitment to safeguarding the virtual...see more`,
    title: "I speak machine linguo",
    price: 13.15,
    coinType: "ETH",
    amount: 0.024,
  },
];