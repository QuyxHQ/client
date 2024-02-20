"use client";
import React from "react";
import "./Withcards.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import { dashCard } from "@/lib/mock/dashcard";
import Link from "next/link";

const cardlink = [
  {
    path: "/Dasboard",
    label: "All",
  },
  {
    path: "/Dasboard/Created",
    label: "Created",
  },
  {
    path: "/Dasboard/Bought",
    label: "Bought",
  },
  {
    path: "/Dasboard/Sold",
    label: "Sold",
  },
  {
    path: "/Dasboard/Forsale",
    label: "For Sale",
  },
];
const index = () => {
  const pathname = usePathname();
  const [compressed, setCompressed] = useState(true);
  return (
    <>
      <div className="wrapper_cont md:bg-black lg:text-white lg:py-40 xl:py-30">
        <div className="top flex justify-around">
          <div className="block moy justify-between items-center">
            <Image
              alt="..."
              src={"/Images/profilerof.png"}
              width={120}
              height={120}
              className="text-white rounded-[120px] p-1"
            />
            <div className="flex gap-[8px] items-center">
              <p className="text-[1.5rem]">Moyinthegrait</p>
              <Image
                alt="..."
                src={"/Images/Verified.svg"}
                width={20}
                height={20}
                className="text-white"
              />
            </div>
            <div className="flex gap-[8px] pl-6">
              <Image
                alt="..."
                src={"/Images/Vector.svg"}
                width={10}
                height={10}
              />
              <p className="text[1rem] text-gray-500">0x5506...50E4</p>
            </div>
            <div className="flex wallet gap-[8px] items-center justify-between w-fit rounded-[500px] bg-[#FFFFFF26] px-[15px] py-[7px] md:hidden">
            <Image
              alt="..."
              src={"/Images/Wallet.svg"}
              width={20}
              height={20}
              className="text-white "
            />
            <p>$5,700.45</p>
          </div>
          </div>
          
          <div className="pt-10 pl-10">
            <div className="flex items-center p-1 items-center gap-2 w-fit rounded-[100px] bg-[#211f22] w-[324px] h-[24]">
              <p className="pl-7 text-[white] text-[14px]">Stats</p>
              <Image
                alt="..."
                src={"/Images/Line 18.png"}
                width={240}
                height={24}
                className="pr-2"
              />
            </div>
            <div className="block items-center  items-center  w-[324px] h-[94px]">
              <div className="flex pl-2 text-[#FFD599] text-[60px] gap-10">
                <p>05</p>
                <p>03</p>
                <p>04</p>
              </div>
              <div className="flex pl-3 text-[#9DA3AF] text-[14px] gap-20 font-weight-400">
                <p>Created</p>
                <p>Sold</p>
                <p>Bought</p>
              </div>
            </div>
          </div>
          <div className="block pl-20 ">
            <div className="flex gap-8 pl-40 pb-20">
              <button className="cursor-pointer">
              <Image
                alt="..."
                src={"/Images/up.svg"}
                width={18}
                height={18}
              />
              </button>
              <button>
              <Image
                alt="..."
                src={"/Images/menu kebab.svg"}
                width={18}
                height={18}
              />
              </button>
            </div>
            <div className="flex flex_btn">
              <button className="flex docs1 d-flex align-items-center justify-content-center gap-3">
                Create new card
                <Image
                  alt="..."
                  src={"/Images/Add.svg"}
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="container justify-between flex align-center pb-[40px] pt-[40px] w-[1200px]">
            <div className="flex gap-[8rem]">
            <div className="flex btn_contain items-center space-x-10 min-w-fit p-2 rounded-md">
            {cardlink.map((link, id)=>
              <button
            className={`${
              pathname == link.path
            } text-[11px] lg:text-base xl:text-lg flex-shrink-0 2xl:text-xl`}
            key={id}
          >
            <Link href={link.path}>{link.label}</Link>
            </button>
            )}
              </div>
            
            </div>
            <div className="flex gap-[8px] items-center justify-between w-fit rounded-[500px] bg-transparent border px-[15px] py-[15px] cursor-pointer">
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
                className="border-none outline-none bg-transparent text-white w-[10vw]"
              />
              <Image
                alt="..."
                src={"/Images/Marketplace/icons/filter.svg"}
                width={20}
                height={20}
                className="text-white"
              />
            </div>
            <div className="flex gap-[8px] items-center justify-between w-fit rounded-[500px] bg-[#FFFFFF26] px-[15px] py-[7px] cursor-pointer">
              <Image
              alt="..."
              src={"/Images/Bookmark 1.svg"}
              width={20}
              height={20}
              className="text-white"
              />
              <p>Saved</p>
            </div>
          </div>  
        <div className="allcard_cont bg-black rounded-[2rem]">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-[2rem] pb-[2rem]">
            {dashCard.map((card, id) => (
              <div
                key={id}
                className="card bg-gradient-to-bg p-4 rounded-md card-border-effect">
                <div className="">
                  <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 pl-[20rem] z-10">
                {card.status?
                  <Image
                      src={card.status}
                      alt=".."
                      width={80}
                      height={32}
                      className=""
                    />:null}
                  </div>
                    <Image
                      src={card.image}
                      alt=""
                      width={200}
                      height={100}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 py-8 px-1">
                    <p
                      className={`${montserratAlternatesMedium.className} text-[24px]`}
                    >
                      {card.title}
                    </p>
                    <p className="whitespace-pre-line text-[12px] text-zinc-400 select-none">
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
                    {card.price ?
                      <div className="flex items-center gap-1 py-1">
                        <p className="text-[40px] text-[#ffd599]">${card.price}</p>
                        <div className="flex text-zinc-500 items-center gap-1 text-[24px]">
                          <p>~</p>
                          <p>{card.amount}</p>
                          <p>{card.coinType}</p>
                        </div>
                      </div> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
};

export default index;
