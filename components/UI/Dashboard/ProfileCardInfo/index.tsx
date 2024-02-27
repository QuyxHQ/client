import React from 'react'
import Image from "next/image"
import Link from "next/link"
import CardInfo from "@/components/UI/Dashboard/Components/Cardinfo"
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Buy from "@/components/Common/Buttons/Buy"


const ProfileCardInfo = () => {
  return (
    <>
      <div className="info_wrap bg-black">
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

          <CardInfo/>
          <div className="gap-[2rem] flex items-center justify-start md:gap-[3rem] mt-[2rem]">
          <Buy/>

            <div className="flex items-center gap-1 py-1">
              <p className="text-lg md:text-4xl text-[#ffd599]">$13.15</p>
              <div className="text-sm flex text-zinc-500 items-center gap-1 md:text-lg">
                <p>~</p>
                <p>0.024</p>
                <p>Eth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCardInfo;