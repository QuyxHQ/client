import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io";
import Image from "next/image";


type Coin = "ETH" | "JPY"; // add more...


type Card= {
  username: string;
  profile: string;
  owner: string;
  ownerprofile: string;
  cardamount: number;
  totalPrice : number;
  coinType: Coin;
  description: string;
  price: number;
  amount: number;
};

const data: Card[] = [
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    owner: "nerdydev",
    ownerprofile: "/Images/Marketplace/collection_profile",
    profile: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    totalPrice: 849.25,
    cardamount: 6,
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
];

const index = () => {
  return (
    <>
      <div className="collection_wrap bg-black">
        <div className="container flex align-center justify-between pt-[2rem]">
          <h3 className="text-white text-[2.5rem] font-bold">
            Featured Collection
          </h3>
          <button className="flex items-center justify-center border px-[18px] py-[7px] gap-3 text-white rounded-[500px]">
            Browse All
            <IoIosArrowRoundForward />
          </button>
        </div>

        <div className="h-[40rem] mx-auto w-[77rem] rounded-lg  ">
          <div className=" border text-white   space-y-4 h-full  rounded-md ">
            <div>
              {/* <Image
                alt="..."
                src={ownerprofile}
                width={20}
                height={20}
                className="text-white"
              /> */}
              {/* <span>{owner}</span> */}
              <Image
                alt="verified"
                src={"/Images/verified.svg"}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index