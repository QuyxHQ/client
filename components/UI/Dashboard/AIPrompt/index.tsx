import React from "react";
import Link from "next/link";
import { FaToggleOn } from "react-icons/fa";
import Image from "next/image";
import "./AIPrompt.css"

const AIPrompt = () => {
  return (
    <>
      <div className="AI_wrap bg-black">
        <div className="container text-white pb-[2rem]">
          <h1 className="text-white text-2xl font-bold pt-[2rem] md:text-4xl">
            Create Profile Card{" "}
          </h1>
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
                <div className="flex items-center gap-[2rem] mt-[2rem] ">
                  <p className="text-[18px] md:text-2xl text-white">
                    This card is for sale
                  </p>
                  <FaToggleOn className="text-[40px]" />
                </div>
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
              <button className="text-base min-w-[50%] mt-[1rem] sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent border rounded-[500px]">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPrompt;
