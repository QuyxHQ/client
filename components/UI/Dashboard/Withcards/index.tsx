"use client";
import React from "react";
import "./Withcards.css";
import Image from "next/image";
import { useState } from "react";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import { dashCard } from "@/lib/mock/dashcard";

const index = () => {
    const [compressed, setCompressed] = useState(true);
  return (
    <>
      <div className="wrapper_cont  md:bg-black py-32 lg:text-white lg:py-48 xl:py-64">
        <div className="flex justify-around w-full">
        <div className="block height-[100px] width-[212px] justify-between items-center">
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
        </div>
        <div className="pt-10">
            <div className="flex items-center  items-center gap-2 w-fit rounded-[100px] bg-[#211f22] border w-[324px] h-[24]">
                <p className="pl-7">Stats</p>
                <Image 
                alt="..."
                src={"/Images/Line 18.png"}
                width={240}
                height={24}
                className="pr-2"
                />
            </div>
            <div className="block items-center  items-center  w-[324px] h-[94]">
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
        <div className="block">
            <div className="flex gap-8 pl-40 pb-20">
                <Image 
                alt="..."
                src={"/Images/up.svg"}
                width={18}
                height={18}
                />
                <Image 
                alt="..."
                src={"/Images/menu kebab.svg"}
                width={18}
                height={18}
                />
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
        <div className="allcard_cont bg-black">
        <div className="container flex align-center justify-between pt-[2rem]">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-[500px] group bg-transparent border border-gradient bg-gradient-to-r from-purple-700 to-yellow-400 px-5 py-2.5">
            All
          </button>
          <button>
          <p>Created</p>
          </button>
          <button>
            <p>Bought</p>
          </button>
          <button>
          <p>Sold</p>
          </button>
          <button>
            <p>For Sale</p>
          </button>
          <div className="flex gap-[8px] items-center justify-between w-fit rounded-[500px] bg-transparent border px-[15px] py-[7px]">
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
              className="border-none outline-none bg-transparent text-white w-[22vw]"
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
          {dashCard.map((card, id) => (
            <div
              key={id}
              className="bg-gradient-to-bg  from-[#1A0F00] via-[#07000F] border text-white  to-[#07000F] p-4  rounded-md card-border-effect"
            >
              <div className="">
                <div className="md:h-[336px] h-[260px] rounded-lg relative overflow-hidden">
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
      </div>
    </>
  );
};

export default index;
