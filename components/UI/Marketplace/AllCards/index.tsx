"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";

type Coin = "ETH" | "JPY"; // add more...

type Card = {
  profileImage: string;
  username: string;
  image: string;
  title: string;
  description: string;
  price: number;
  coinType: Coin;
  additionalClass?: string;
  amount: number;
};

const data: Card[] = [
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
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
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
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
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
];

const index = () => {
  const [compressed, setCompressed] = useState(true);

  return (
    <>
      <div className="allcard_cont bg-black">
        <div className="container flex align-center justify-between pt-[2rem]">
          <h3 className="text-white text-[2.5rem] font-bold">All Cards</h3>
          <div className="flex align-center justify-between w-[35%] rounded-[500px] bg-transparent border px-[30px] py-[15px]">
            <Image
              alt="..."
              src={"/Images/Marketplace/icons/Search 2.svg"}
              width={20}
              height={20}
              className="text-white"
            />
            <input
              type="Search"
              placeholder="Search"
              className="border-none outline-none bg-transparent text-white"
            />
            <Image
              alt="..."
              src={"/Images/Marketplace/icons/filter.svg"}
              width={20}
              height={20}
              className="text-white"
            />
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mt-[2rem] pb-[2rem]">
          {data.map((card, id) => (
              <div
                key={id}
                className="bg-gradient-to-bg  from-[#150b04] via-[#0b030c] border text-white  to-[#0b030c] p-4  rounded-md card-border-effect"
              >
                <div className="">
                  <div className="">
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
                  </div>
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
                      {compressed ? (
                        <>
                          {card.description.length > 50 ? (
                            <span>
                              {card.description.slice(0, 100)}...{" "}
                              <span
                                className="text-purple-300 cursor-pointer"
                                onClick={() => setCompressed((prev) => !prev)}
                              >
                                See More
                              </span>
                            </span>
                          ) : (
                            card.description
                          )}
                        </>
                      ) : (
                        card.description
                      )}
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
    </>
  );
};

export default index;
