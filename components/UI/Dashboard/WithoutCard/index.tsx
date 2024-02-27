import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tab from "./tab";
import "./WithoutCard.css"
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

            <div className="flex flex-col items-center">
              <div className="flex sm:justify-start sm:px-[20px] md:min-w-[350px] items-center w-full md:items-center justify-center gap-[6px] bg-[#272727] rounded-full px-[10px] py-[5px] ">
                <p>stats</p>

                <div className="h-[2px] w-full flex-grow bg-gray-500 rounded-md"></div>
                {/* <Image
                  alt="verified"
                  src={"/Images/Line 18.svg"}
                  width={300}
                  height={20}
                  className="md:bg-[#414349] w-full"
                /> */}
              </div>
              <div className="grid grid-cols-3 gap-[3rem] text-center md:gap-[5rem]">
                <div className="flex flex-col">
                  <span className="text-[32px] text-[#ffd599] md:text-[40px]">
                    00
                  </span>
                  <p className="text-[#4f5258] text-[13px] md:text-[14px]">
                    Created
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[32px] text-[#ffd599] md:text-[40px]">
                    00
                  </span>
                  <p className="text-[#4f5258] text-[13px] md:text-[14px]">
                    Sold
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-[32px] text-[#ffd599] md:text-[40px]">
                    00
                  </span>
                  <p className="text-[#4f5258] text-[13px] md:text-[14px]">
                    Bought
                  </p>
                </div>
              </div>
            </div>

            <Link href="/">
              <div className="flex items-center justify-between">
                <button className="Create text-[14px] flex-shrink-0 md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent  rounded-[500px]">
                  Create new card
                  <Image
                    src={"/Images/Vector.svg"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </button>

                <button className=" hidden text-[14px] items-center justify-center gap-[6px] bg-[#272727]  rounded-[500px] md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] ">
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

          <Tab />
        </div>
      </div>
    </>
  );
};

export default WithoutCard;
