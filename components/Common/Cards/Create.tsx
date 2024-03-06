import React from "react";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import Image from "next/image";

type Coin = "ETH" | "JPY"; // add more...

type Card = {
  id: string;
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

const Cards: Card[] = [
  {
    id: "1",
    username: "React",
    profileImage: "/Images/Avatars/react.png",
    image: "/Images/fineboy.png",
    description: `A web3 design maverick, fearlessly pioneering the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@React",
    saleTag: null, // Use null instead of "null"
    price: null,
    coinType: "ETH",
    amount: 0.024,
  },
];

const Create = () => {
  return (
    <>
      {Cards.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-bg relative pb-[5rem]  from-[#150b04] via-[#0b030c] border text-white to-[#0b030c] p-4 rounded-md duration-200"
        >
          <div className="">
            <div className="absolute top-2 right-2 z-[99]">
              {/* Check if saleTag is not null and not undefined */}
              {card.saleTag && (
                <Image
                  src={card.saleTag}
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="md:h-auto h-auto rounded-lg relative overflow-hidden">
              <Image
                src={card.image}
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 py-3 px-1">
              <p className={`${montserratAlternatesMedium.className} text-xl`}>
                {card.title}
              </p>
              <p className="whitespace-pre-line text-xs text-zinc-400 select-none">
                {card.description}
              </p>

              {card.price !== null && (
                <div className="flex items-center gap-1 py-1">
                  <p className="text-4xl text-[#ffd599]">${card.price}</p>
                  <div className="flex text-zinc-500 items-center gap-1 text-lg">
                    <p>~</p>
                    <p>{card.amount}</p>
                    <p>{card.coinType}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Create;
