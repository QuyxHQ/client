type Coin = "ETH" | "JPY"; // add more...

type Card = {
  image: string;
  title: string;
  description: string;
  coinType: Coin;
  price: number;
  amount: number;
  additionalClass?: string;
};

export const dashCard: Card[] = [
  {
    image: "/Images/maestro.png",
    description: `The formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true...see more`,
    title: "Blockchain Maester",
  },
  {
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
    image: "/Images/ddss.png",
    description: `A formidable cyber security expert whose expertise transcends the digital battlefield. With a relentless commitment to safeguarding the virtual...see more`,
    title: "Cipher Guardian",
    price: 603.15,
    coinType: "ETH",
    amount: 0.024,
  },
  {
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
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
];