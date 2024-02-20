import React from 'react'
import Image from "next/image"
import Link from "next/link"

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
            <Link href="/profileauction">
              <p className="underline">Explore more by the Creator</p>
          </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <div className="bg_image min-h-[69.7vh]  w-full b border rounded-xl pt-[1rem] pl-[1rem] ">
                <button className="text-[12px] flex items-center justify-center gap-[6px] text-white bg-[#272727]  rounded-[500px] px-[20px] py-[10px] md:text-[18px]">
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
            </div>
            {/* <p>This card is for sale</p> */}

            <div>
              <form action="" className="space-y-2">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className=" min-w-[40vw] outline-none block w-full bg-transparent border py-3 rounded-md px-3 text-sm"
                />
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder="Info about this card"
                  className="min-w-[40vw] h-[14rem] px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
                />
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description <span className="text-[#cc99ff]">(Optional)</span>
                </label>
                <textarea
                  id="bio"
                  placeholder="Info about this card"
                  className="min-w-[40vw] h-[6.8rem] px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
                />
                {/* <button className="text-base min-w-[70%] sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
                  Create
                </button> */}
              </form>
            </div>
          </div>

          <div className="gap-[2rem] flex items-center justify-start md:gap-[3rem] mt-[2rem]">
            <button className="text-[12px] flex items-center flex-shrink-0 justify-center gap-[6px] text-white bg-[#272727] rounded-[500px] px-[20px] py-[10px] md:text-[20px]">
              Buy now
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
        </div>
      </div>
    </>
  );
};

export default ProfileCardInfo;