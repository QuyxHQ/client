import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaToggleOn } from "react-icons/fa";

const AuctionSell = () => {
  return (
    <>
      <div className="profilesell_wrap bg-black">
        <div className="container text-white pb-[2rem]">
          <h1 className="text-white text-2xl md:text-4xl font-bold pt-[2rem]">
            Create Profile Card{" "}
          </h1>
          <div className="flex items-start justify-start gap-[2rem]  px-3 py-3  mt-[1.5rem] bg-transparent border rounded-[500px] w-fit">
            <Link href="#">
              <p className="text-[12px] md:text-base">Upload media</p>
            </Link>
            <Link href="/AIPrompt">
              <p className="text-[12px] md:text-base">
                Generate PFP with AI prompt
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
            <div>
              <div className="min-h-[55vh]  w-full bg-transparent border rounded-xl grid place-items-center ">
                <div className="text-center space-y-3">
                  <p className="">Drag and drop media</p>
                  <h3 className="font-bold text-purple-300 text-3xl cursor-pointer">
                    Browse files
                  </h3>
                  <p className="text-[#D9D9D9]">max size 50mb</p>
                </div>
              </div>
            </div>

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
                  className="min-w-[40vw] h-40 px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
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
                  className="min-w-[40vw] h-20 px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
                />
              </form>
              {/* <button className="text-base min-w-[50%] mt-[1rem] sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
                Create
              </button> */}
            </div>
          </div>

          <div className="flex items-center gap-[2rem] mt-[2rem] ">
            <p className="text-[18px] md:text-2xl text-white">
              This card is for sale
            </p>
            <FaToggleOn className="text-[40px]" />
            <span className="text-white flex items-center gap-[6px] bg-[#1A1a1a] rounded-[500px] px-2 py-2">
              <Image src={"/Images/note.svg"} alt="" width={20} height={20} />
              Note: 10% of your selling price will be deducted as commission
              fees
            </span>
          </div>

          <div className="flex items-center min-w-[48%] md:w-[48%] justify-between border bg-transparent px-4 py-5 rounded-xl mt-[1.5rem]">
            <p className="text-2xl">Auction</p>
            <Image src={"/Images/Down.svg"} alt="" width={20} height={20} />
          </div>

          <div className="flex items-start gap-[3rem]">
            <div className="min-w-[48%] md:w-[48%]">
              <label
                htmlFor="Enter Price"
                className="block text-lg font-medium text-white mt-[18px]"
              >
                Enter Price
              </label>
              <div className="flex items-center  justify-between border bg-transparent px-4 py-5 rounded-xl ">
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="$ | 0.00"
                  required
                  className="bg-transparent outline-none text-4xl text-white resize-none"
                />
              </div>
            </div>

            <div className="min-w-[48%] md:w-[48%]">
              <label
                htmlFor="Enter Price"
                className="block text-lg font-medium text-white mt-[18px]"
              >
                Enter Price
              </label>
              <div className="flex items-center justify-between border bg-transparent px-4 py-5 rounded-xl ">
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="$ | 0.00"
                  required
                  className="bg-transparent outline-none text-4xl text-white resize-none"
                />
              </div>
            </div>
          </div>

          <div className="text-white bg-[#1a1a1a] rounded-xl px-4 py-1 mt-[1rem] max-w-fit">
            <p className="inline text-xl">Eth</p>
          </div>

          <div className="grid grid-cols-1 mt-[5px] md:gap-[3rem] md:grid-cols-2 mb-[3rem]">
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

          <div className="">
            <label className="mb-[1rem] flex items-center gap-[1rem]">
              <span className="text-sm">
                Receive notifications for every new bid
              </span>
              <input
                type="checkbox"
                className="mr-2 form-checkbox outline-none border-none"
                id="agree"
                name="agree"
                value="agree"
                required
              />
            </label>
          </div>

          <button className="text-base sm:w-[48%] md:min-w-[48%] mt-[1rem] sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default AuctionSell