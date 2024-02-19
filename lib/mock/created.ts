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
    status:"/Images/Frame 1000005128.png",
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
  {
    image: "/Images/gg.png",
    description: `Badass frontend virtuoso sculpting immersive user experiences with a fusion of code and creativity. With a relentless...see more`,
    title: "Ghost writer",
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
  {
    status:"/Images/Frame 1000005128.png",
    image: "/Images/guy.png",
    description: `Badass frontend virtuoso sculpting immersive user experiences with a fusion of code and creativity. With a relentless...see more`,
    title: "React Native",
    price: 819.25,
    coinType: "ETH",
    amount: 0.024,
  },
];