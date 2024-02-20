import React from 'react';
import Image from "next/image";
import Link from "next/link";
// import DashboardLayout from "@/app/(dashboard)/DashboardLayout";

const WithoutCard = () => {
  return (
    // <DashboardLayout>
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
              <div className='flex items-center justify-between'>
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

          <div className="min-h-[50vh] bg-transparent border rounded-xl grid place-items-center mt-[4rem]">
            <div className="text-center space-y-6">
              <p className="text-white font-bold">Nothing here yet</p>
              <button className="sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
                Create new card
                <Image
                  src={"/Images/Vector.svg"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithoutCard;