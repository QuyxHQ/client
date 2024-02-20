import React from 'react'
import Image from "next/image";
import Link from "next/link";
// import "@/components/UI/Dashboard/ProfileAuction/ProfileAuction.css";
import Table from "@/components/UI/Table";

const AcceptBid = () => {
  return (
    <>
      <div className="Auction_wrap bg-black">
        <div className="container pb-[2rem]">
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
            </div>

            <div className="flex flex-col">
              <span className="flex sm:justify-start sm:px-[20px] min-w-[500px] md:items-center justify-center gap-[6px] bg-[#272727] rounded-[500px] px-[10px] py-[5px] ">
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
                  <span className="text-[40px] text-[#ffd599]">00</span>
                  <p className="text-[#4f5258] text-[14px]">Created</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[40px] text-[#ffd599]">00</span>
                  <p className="text-[#4f5258] text-[14px]">Sold</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[40px] text-[#ffd599]">00</span>
                  <p className="text-[#4f5258] text-[14px]">Bought</p>
                </div>
              </div>
            </div>

            <Link href="/createupload">
              <div className="flex items-center justify-between">
                <button className="text-[14px] md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
                  Create new card
                  <Image
                    src={"/Images/Vector.svg"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </button>

                <button className=" hidden text-[14px] flex items-center justify-center gap-[6px] bg-[#272727]  rounded-[500px] md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] ">
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
            <Link href={"/"}>
              <button className="text-sm md:text-base">Created</button>
            </Link>
            <Link href={"/"}>
              <button className="text-sm md:text-base">Bought</button>
            </Link>{" "}
            <Link href={"/"}>
              <button className="text-sm md:text-base">Sold</button>
            </Link>{" "}
            <Link href={"/"}>
              <button className="text-sm md:text-base">Active</button>
            </Link>
            <Link href={"/"}>
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