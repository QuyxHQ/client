import React from 'react'
import Image from "next/image";
import Link from "next/link";
import DetailsTab from "@/components/UI/Dashboard/CardDetails/DetailsTab";
import "@/components/UI/Dashboard/ProfileAISell/ProfileAISell.css";

const EditAIAuction = () => {
  return (
    <>
      <div className="EditAIAuction_wrap bg-black">
        <div className="container text-white pb-[2rem]">
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

            <div className="flex flex-col items-start md:items-end gap-[3rem]">
              <div className="flex items-start gap-[2rem]">
                <Image
                  alt="..."
                  src={"/Images/Upload.svg"}
                  width={25}
                  height={15}
                  className="text-white"
                />
                <Image
                  alt="..."
                  src={"/Images/Menu Kebab.svg"}
                  width={25}
                  height={15}
                  className="text-white"
                />
              </div>
              <Link href="/createupload">
                <div className="flex items-center justify-between">
                  <button className="text-[14px] flex-shrink-0 md:text-base px-[20px] sm:py-[10px] sm:px-4 md:px-[20px] py-3 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
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
          </div>

          <DetailsTab />

          <div className="flex items-center justify-between mt-[3rem]">
            <button className="flex items-center gap-2 text-white bg-[#272727] px-3 py-1 rounded-full">
              <Image
                alt="..."
                src={"/Images/Left 1.svg"}
                width={15}
                height={15}
                className="text-white"
              />
              Back
            </button>
            <button className="flex items-center gap-2 text-white px-3 py-1">
              <Image
                alt="..."
                src={"/Images/Edit 1.svg"}
                width={15}
                height={15}
                className="text-white"
              />
              Edit
            </button>
          </div>

          <div className="navigate flex items-start gap-[1rem] justify-start md:gap-[2rem]  px-3 py-3  mt-[1.5rem] bg-transparent border rounded-[500px] w-fit">
            <Link href="/ProfileCardInfo">
              <p className="paragraph text-[12px] md:text-base">Upload media</p>
            </Link>
            <Link href="/AIPrompt">
              <p className="paragraph text-[12px] md:text-base">
                Generate PFP with AI prompt
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
            <div>
              <div className="flex flex-col space-y-4">
                <div className="min-h-[12vh] px-3 mt-1 w-full rounded-xl flex border border-zinc-500">
                  <textarea
                    id="bio"
                    placeholder="describe what you want your pfp to look like..."
                    className="outline-none py-3 placeholder:text-zinc-500 resize-none bg-transparent flex-grow"
                  />
                  <Image
                    src={"/Images/push.svg"}
                    width={35}
                    height={35}
                    alt="logo"
                  />
                </div>

                <div className="min-h-[60vh] w-full bg-transparent border rounded-xl grid place-items-center relative">
                  <div className="text-center space-y-3">
                    <p className="">Drag and drop media</p>
                    <h3 className="font-bold text-purple-300 text-3xl cursor-pointer">
                      Browse files
                    </h3>
                    <p className="text-[#D9D9D9]">max size 50mb</p>
                  </div>

                  <div className="flex items-end absolute bottom-0 left-0 h-0 p-8 justify-center w-full">
                    <button className="flex items-center text-xl gap-[10px] w-full py-2 justify-center rounded-full bg-[#242424] duration-300 hover:bg-[#3b3b3b]">
                      Regenerate
                      <Image
                        src={"/Images/re.svg"}
                        width={17}
                        height={17}
                        alt="logo"
                        className="text-white"
                      />
                    </button>
                  </div>
                </div>
                {/* <div className="flex items-center gap-[2rem] mt-[2rem] ">
                  <p className="text-[18px] md:text-2xl text-white">
                    This card is for sale
                  </p>
                  <FaToggleOn className="text-[40px]" />
                </div> */}
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

          <div className="flex flex-col items-start md:flex-row md:items-center justify-between mt-[1rem]">
            <div className="flex">
              <p className="text-[14px] md:text-xl text-white">
                Make Card Available for Sale
              </p>
              {/* <FaToggleOn className="text-[40px]" /> */}
            </div>

            <button className="min-w-[5rem] bg-[#FF4c00] text-[12px] md:min-w-[7rem] mt-[1rem]  md:text-base px-2 sm:px-4 md:px-[20px] py-2  md:py-[15px] flex items-center text-white justify-center gap-2  rounded-[500px]">
              Delete Card
              <Image
                alt="..."
                src={"/Images/Delete 2.svg"}
                width={15}
                height={15}
                className="text-white"
              />
            </button>
          </div>

          <div className="flex items-center min-w-[48%] md:w-[48%] justify-between border bg-transparent px-4 py-5 rounded-xl mt-[1.5rem]">
            <p className="text-xl md:text-2xl">Auction</p>
            <Image src={"/Images/Down.svg"} alt="" width={20} height={20} />
          </div>

          <div className="grid grid-col-1  md:grid-cols-2 gap-[3rem]">
            <div className="w-full ">
              <label
                htmlFor="Enter Price"
                className="block text-lg font-medium text-white mt-[18px]"
              >
                Minimum Price
              </label>
              <div className="flex items-center  justify-between border bg-transparent px-4 py-5 rounded-xl ">
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="$ | 0.00"
                  required
                  className="bg-transparent outline-none text-2xl md:text-4xl text-white resize-none"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="Enter Price"
                className="block text-lg font-medium text-white mt-[18px]"
              >
                Maximum Price <span className="text-[#9327ff]">(Optional)</span>
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
                Auction Period
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
                Max Number of bid{" "}
                <span className="text-[#9327ff]">(optional)</span>
              </p>
              <div className="border bg-transparent px-5 mt-[10px] py-[1.6rem] rounded-md">
                <p className="text-[#D9D9D9] text-4xl md:text-6xl">4</p>
              </div>
            </div>
          </div>

          <div className="">
            <label className="mb-[1rem] flex items-center gap-[1rem]">
              <span className="text-sm md:text-md">
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

          <button className="min-w-[58%] text-base md:min-w-[48%] mt-[1rem] sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
            Save change
          </button>
        </div>
      </div>
    </>
  );
}

export default EditAIAuction