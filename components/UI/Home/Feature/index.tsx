import React, { useEffect } from "react";
import "./Feature.css";
import Image from "next/image";
const index = () => {
  return (
    <>
      <div className="feat">
        <div className="group_text sm:mb-[3vw] pt-[5rem] md:pt-16 w-full mb-8rem text-center">
          <p className="text-[#fff] text-[3vw] font-bold">Powerful Features</p>
          <p className=" text-[1vw] text-[#9DA3AF]  ">
            consectetur adipiscing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid gap-7 grid-cols-7 text-white bg-red w-[95%] max-w-[1100px] min-h-[40rem]  mx-auto">
          <div className="grid_1 col-span-3 bg-[#171717] rounded-lg border-white-500 flex-1 p-8 relative">
            <Image
              alt="..."
              src={"/Images/secure.svg"}
              width={400}
              height={400}
              className="absolute -top-2 -left-20"
            />

            <div className="absolute top-0 left-0 w-full h-full px-8 pb-28 flex items-end">
              <div className="space-y-2">
                <p className="text-zinc-500">Decentralized Exchange</p>
                <p className="text-4xl">
                  Swap tokens <br /> & collectibles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid gap-7 grid-cols-2">
            <div className="bg-[#171717] p-8 relative flex items-center rounded-lg col-span-2 border-white-500">
              <Image
                alt="..."
                src={"/Images/token.png"}
                width={310}
                height={310}
                className="absolute -top-2 -right-6"
              />

              <div className="space-y-2">
                <p className="text-zinc-500">Decentralized Exchange</p>
                <p className="text-4xl">
                  Swap tokens <br /> & collectibles.
                </p>
              </div>
            </div>
            <div className="bg-[#171717] p-8 relative flex items-center rounded-lg col-span-2 border-white-500">
              <Image
                alt="..."
                src={"/Images/token.png"}
                width={310}
                height={310}
                className="absolute -top-2 -right-6"
              />

              <div className="space-y-2">
                <p className="text-zinc-500">Decentralized Exchange</p>
                <p className="text-4xl">
                  Swap tokens <br /> & collectibles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-hero grid grid-cols-3 mt-[4rem] w-[95%] max-w-[1100px]  mx-auto">
          <div className="gasfee flex align-center text-center justify-center flex-col">
            <p className="head_text bg-gradient-to-r font-bold from-purple-700 to-yellow-400 text-transparent bg-clip-text">
              $0.0001
            </p>
            <p className="text-[#fff] text-[16px]">
              Low gas fees - almost zero
            </p>
          </div>
          <div className="sync flex align-center text-center justify-center flex-col">
            <p className="head_text bg-gradient-to-r font-bold from-purple-700 to-yellow-400 text-transparent bg-clip-text">
              12 Secs
            </p>
            <p className="text-[#fff] text-[16px]">
              Fast sync to web3 platforms
            </p>
          </div>
          <div className="proof_of_stake flex align-center text-center justify-center flex-col">
            <p className="head_text bg-gradient-to-r font-bold from-purple-700 to-yellow-400 text-transparent bg-clip-text">
              98%
            </p>
            <p className="text-[#fff] text-[16px]">Proof of stake </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
