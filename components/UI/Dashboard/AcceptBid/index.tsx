import React from 'react'
import Image from "next/image";
import Link from "next/link";
// import "@/components/UI/Dashboard/ProfileAuction/ProfileAuction.css";
import Table from "@/components/UI/Table";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import CardInfo from "@/components/UI/Dashboard/Components/Cardinfo";
// import Tab from "@/components/UI/Dashboard/WithoutCard/tab";



const AcceptBid = () => {
  return (
    <>
      <div className="Auction_wrap bg-black">
        <div className="container pb-[2rem]">
          <div className="flex items-start flex-col justify-between gap-[2rem] md:flex md:flex-row md:items-center text-white">
            <div className="flex items-center justify-center gap-2 ">
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
              <p>~ Creator</p>
            </div>

            <div>
              <Link href="/">
                <p className="underline">Explore more by the Creator</p>
              </Link>
            </div>
          </div>

          <CardInfo />
          <div className="gap-[2rem] flex items-center justify-start md:gap-[3rem] mt-[2rem]">
            <button className="text-[12px] flex items-center flex-shrink-0 justify-center gap-[6px] text-white bg-[#2f5b24] rounded-[500px] px-[20px] py-[10px] md:text-[20px]">
              Accept Latest Bid
              <Image
                alt="..."
                src={"/Images/Buy 1.svg"}
                width={15}
                height={15}
                className="text-white"
              />
            </button>

            <div className="flex items-center gap-1 py-1">
              <p className="text-lg md:text-4xl text-[#ffd599]">$13.15</p>
              <div className="text-sm flex text-zinc-500 items-center gap-1 md:text-lg">
                <p>~</p>
                <p>0.024</p>
                <p>Eth</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-[3rem] md:gap-[3rem] md:grid-cols-2 mb-[3rem]">
            <div>
              <p className="font-bold text-[18px] mt-[3rem] text-white">
                Auction Period Remaining
              </p>
              <div className=" flex gap-[1rem] items-center md:gap-[4rem] text-white w-fit-content bg-transparent border px-5 mt-[10px] py-3 rounded-md">
                <div className="flex flex-col gap-[8px] items-center">
                  <p className="text-[#D9D9D9] text-[12px] md:text-[14px]">
                    Days
                  </p>
                  <p className="text-[#D9D9D9] text-4xl md:text-6xl">00:</p>
                </div>
                <div className="flex flex-col gap-[8px] items-center">
                  <p className="text-[#D9D9D9] text-[12px] md:text-[14px]">
                    Hours
                  </p>
                  <p className="text-[#D9D9D9] text-4xl md:text-6xl">00:</p>
                </div>
                <div className="flex flex-col gap-[8px] items-center">
                  <p className="text-[12px] md:text-[14px]  text-[#D9D9D9]">
                    Minutes
                  </p>
                  <p className=" text-4xl md:text-6xl text-[#D9D9D9]">00:</p>
                </div>
                <div className="flex flex-col gap-[8px] items-center">
                  <p className="text-[12px] md:text-[14px] text-[#D9D9D9]">
                    Second
                  </p>
                  <p className="text-4xl md:text-6xl text-[#D9D9D9]">03</p>
                </div>
              </div>
            </div>

            <div className="min-w-[20vw] ">
              <p className="font-bold text-[18px] mt-[3rem] text-white ">
                Auction Period Remaining
              </p>
              <div className="border bg-transparent px-5 mt-[10px] py-[1.6rem] rounded-md">
                <p className="text-[#D9D9D9] text-4xl md:text-6xl">4</p>
              </div>
            </div>
          </div>

          <Table />
        </div>
      </div>
    </>
  );
}

export default AcceptBid