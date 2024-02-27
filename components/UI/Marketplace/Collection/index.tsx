import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import { cardData } from "@/lib/mock/card";

type Coin = "ETH" | "JPY"; // add more...

type Card = {
  username: string;
  profile: string;
  owner: string;
  ownerprofile: string;
  cardamount: number;
  totalPrice: number;
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
        <div className="container flex align-center justify-between pt-[2rem] mb-[2rem]">
          <h3 className="text-white font-bold text-[1.5rem] md:text-[2.5rem] ">
            Featured Collection
          </h3>
          <button className="flex items-center min-w-fit text-[14px] px-[14px] py-[3px] justify-center border md:px-[18px] md:py-[7px] text-base gap-3 text-white rounded-[500px]">
            Browse All
            <IoIosArrowRoundForward />
          </button>
        </div>

        <div className="h-[40rem] container rounded-lg">
          <div className=" border text-white h-full rounded-2xl p-8 overflow-y-auto overflow-x-hidden hide_scroll">
            <div className="p-2 rounded-full border w-fit bg-zinc-800 border-zinc-500">
              <div className="flex items-center gap-2">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={"/Images/Marketplace/scroll_profile.svg"}
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
                <p>nerdydev</p>
                <Image
                  alt="verified"
                  src={"/Images/verified.svg"}
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full md:w-16 w-12 md:h-16 h-12">
                  <Image
                    src={"/Images/Marketplace/glass.png"}
                    alt="avatar with an eyeglass"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:space-y-1">
                  <p
                    className={`font-bold md:text-2xl text-lg ${montserratAlternatesMedium.className}`}
                  >
                    Dev Pack
                  </p>
                  <p>6 Cards</p>
                </div>
              </div>

              <p className="lg:text-5xl md:text-4xl text-3xl text-[#ffd599]">
                $849.25
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {cardData.map((card, id) => (
                <div
                  key={id}
                  className="bg-gradient-to-bg  from-[#150b04] via-[#0b030c] border text-white  to-[#0b030c] p-4  rounded-md card-border-effect"
                >
                  <div className="">
                    {/* <div className="">
                      <div className="flex items-center gap-2 mb-3">
                        <Image
                          src={card.profileImage}
                          alt=""
                          width={35}
                          height={35}
                        />
                        <span className="text-sm">{card.username}</span>
                        <Image
                          alt="verified"
                          src={"/Images/verified.svg"}
                          width={20}
                          height={20}
                        />
                      </div>
                    </div> */}
                    <div className="md:h-[15rem] h-[10rem] rounded-lg relative overflow-hidden">
                      <Image
                        src={card.image}
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 py-3 px-1">
                      <p
                        className={`${montserratAlternatesMedium.className} text-xl`}
                      >
                        {card.title}
                      </p>
                      <p className="whitespace-pre-line text-xs text-zinc-400 select-none">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-1 py-1">
                        <p className="text-4xl text-[#ffd599]">${card.price}</p>
                        <div className="flex text-zinc-500 items-center gap-1 text-lg">
                          <p>~</p>
                          <p>{card.amount}</p>
                          <p>{card.coinType}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[40rem] container rounded-lg mt-[5rem]">
          <div className=" border text-white h-full rounded-2xl p-8 overflow-y-auto overflow-x-hidden hide_scroll">
            <div className="p-2 rounded-full border w-fit bg-zinc-800 border-zinc-500">
              <div className="flex items-center gap-2">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={"/Images/Marketplace/scroll_profile.svg"}
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
                <p>nerdydev</p>
                <Image
                  alt="verified"
                  src={"/Images/verified.svg"}
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full md:w-16 w-12 md:h-16 h-12">
                  <Image
                    src={"/Images/Marketplace/glass.png"}
                    alt="avatar with an eyeglass"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:space-y-1">
                  <p
                    className={`font-bold md:text-2xl text-lg ${montserratAlternatesMedium.className}`}
                  >
                    Dev Pack
                  </p>
                  <p>6 Cards</p>
                </div>
              </div>

              <p className="lg:text-5xl md:text-4xl text-3xl text-[#ffd599]">
                $849.25
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {cardData.map((card, id) => (
                <div
                  key={id}
                  className="bg-gradient-to-bg  from-[#150b04] via-[#0b030c] border text-white  to-[#0b030c] p-4  rounded-md card-border-effect"
                >
                  <div className="">
                    {/* <div className="">
                      <div className="flex items-center gap-2 mb-3">
                        <Image
                          src={card.profileImage}
                          alt=""
                          width={35}
                          height={35}
                        />
                        <span className="text-sm">{card.username}</span>
                        <Image
                          alt="verified"
                          src={"/Images/verified.svg"}
                          width={20}
                          height={20}
                        />
                      </div>
                    </div> */}
                    <div className="md:h-[15rem] h-[10rem] rounded-lg relative overflow-hidden">
                      <Image
                        src={card.image}
                        alt=""
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 py-3 px-1">
                      <p
                        className={`${montserratAlternatesMedium.className} text-xl`}
                      >
                        {card.title}
                      </p>
                      <p className="whitespace-pre-line text-xs text-zinc-400 select-none">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-1 py-1">
                        <p className="text-4xl text-[#ffd599]">${card.price}</p>
                        <div className="flex text-zinc-500 items-center gap-1 text-lg">
                          <p>~</p>
                          <p>{card.amount}</p>
                          <p>{card.coinType}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
