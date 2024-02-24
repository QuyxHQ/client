"use client";
import React from "react";
import "./Withcards.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import { dashCard } from "@/lib/mock/bought";
import Link from "next/link";
// const cardlink = [
//   {
//     path: "/withcard",
//     label: "All",
//   },
//   {
//     path: "/withcard/Created",
//     label: "Created",
//   },
//   {
//     path: "/withcard/Bought",
//     label: "Bought",
//   },
//   {
//     path: "/withcard/Sold",
//     label: "Sold",
//   },
//   {
//     path: "/withcard/Forsale",
//     label: "For Sale",
//   },
// ];
const Withcard = () => {
  const pathname = usePathname();
  const [compressed, setCompressed] = useState(true);
  return (
    <>
    <div className="dashboard_wrap bg-black pb-[2rem]">
        <div className="container">
          <div className="m flex flex-col gap-4 md:items-center md:flex-row justify-between text-white">
            <div className="flex flex-col items-start space-y-1">
              <Image
                alt="..."
                src={"/Images/moyin.svg"}
                width={70}
                height={70}
                className="text-white"
              />
              <div className="flex items-center justify-center">
                <span className="text-m">Moyinthegrait</span>
                <Image
                  alt="verified"
                  src={"/Images/verified.svg"}
                  width={20}
                  height={20}
                />
              </div>

              <div className="flex items-center justify-center gap-[5px]">
                <Image
                  alt="verified"
                  src={"/Images/Eth.svg"}
                  width={15}
                  height={15}
                />
                <span className="text-[#9da3af]">0x5506...50E4</span>
              </div>

              <button className=" wallet text-[14px] flex items-center justify-center gap-[6px] bg-[#272727] rounded-[500px] md:text-base px-[30px] sm:py-[10px] sm:px-4 md:px-[30px] py-3 md:py-[30px] md:hidden">
                <Image
                  src={"/Images/Wallet.svg"}
                  width={20}
                  height={20}
                  alt="logo"
                />
                $5,700.45
              </button>
            </div>
           

            <div className="flex flex-col">
              <span className="flex sm:justify-start sm:px-[20px] min-w-[500px] md:items-center justify-center gap-[6px] bg-[#272727] rounded-[500px] px-[10px] py-[5px]">
                <p>stats</p>
                <Image
                  alt="verified"
                  src={"/Images/Line 18.svg"}
                  width={300}
                  height={20}
                  className="md:bg-[#414349] w-full"
                />
              </span>
              <div className="grid grid-cols-3 gap-[5rem]">
                <div className="flex flex-col">
                  <span className="text-[40px] text-[#ffd599]">05</span>
                  <p className="text-[#4f5258] text-[14px]">Created</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[40px] text-[#ffd599]">03</span>
                  <p className="text-[#4f5258] text-[14px]">Sold</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[40px] text-[#ffd599]">04</span>
                  <p className="text-[#4f5258] text-[14px]">Bought</p>
                </div>
              </div>
            </div>
            <div className="upload">
            <div className="flex gap-8">
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
            
            </div>
           
            <Link href="/createupload">
              <div className='flex justify-between flex_btn'>
                <button className="docs1 text-[14px] md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent rounded-[500px] ">
                  Create new card
                  <Image
                    src={"/Images/Vector.svg"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </button>

                <button className=" text-[14px] flex items-center justify-center gap-[6px] bg-[#272727]  rounded-[500px]  md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] md:hidden">
                  <Image
                    alt="..."
                    src={"/Images/bookmark.svg"}
                    width={15}
                    height={15}
                    className="text-white"
                  />
                  saved
                </button>
              </div>
            </Link>
          </div>

          <div className="text-white flex items-center justify-between mt-[2rem]">
            <Link href={"/withcard/"}>
              <button className="text-sm md:text-base">All</button>
            </Link>
            <Link href={"/withcard/Created"}>
              <button className="text-sm md:text-base">Created</button>
            </Link>
            <Link href={"/withcard/Bought"}>
              <button className="text-sm md:text-base">Bought</button>
            </Link>{" "}
            <Link href={"/withcard/Sold"}>
              <button className="text-sm md:text-base">Sold</button>
            </Link>{" "}
            <Link href={"/withcard/Forsale"}>
              <button className="text-sm md:text-base">For Sale</button>
            </Link>
            <div className=" hidden md:flex align-center gap-[5px] justify-between w-fit rounded-[500px] bg-transparent border px-[30px] py-[15px]">
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
            <button className=" hidden text-[14px] md:flex items-center justify-center gap-[6px] bg-[#272727]  rounded-[500px] px-[20px] py-[10px] md:text-base">
              <Image
                alt="..."
                src={"/Images/bookmark.svg"}
                width={15}
                height={15}
                className="text-white"
              />
              saved
            </button>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mt-[2rem] pb-[2rem]">
          {dashCard.map((card, id) => (
            <div
              key={id}
              className="card bg-gradient-to-bg p-4 rounded-md"
            >
              <div className="">
                <div className="">
                </div>
                <div className="md:h-[30rem] h-[20rem] lg:h-[15rem] h-[10rem] rounded-lg relative overflow-hidden">
                <div className="absolute saved top-0 left-0 pl-[20rem] z-10">
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
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-full object-cover"
                    />
                </div>
                <div className="space-y-3 py-8 px-1">
                  <p
                    className={`${montserratAlternatesMedium.className} text-[24px] text-[white]`}
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
                              className="text-purple-300 cursor-pointer text-[12px]"
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
                    <p className="text-4xl text-[#ffd599]">${card.price}</p>
                    <div className="flex text-zinc-500 items-center gap-1 text-lg">
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

export default Withcard;
