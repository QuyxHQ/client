import React from 'react';
import Image from "next/image";


const index = () => {
  return (
    <>
      {/* <div className="container"> */}
        <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
          <div>
            <div className="flex flex-col space-y-4 h-full">
              <div className="min-h-[12vh] px-3 mt-1 w-full rounded-xl flex border border-zinc-500">
                <textarea
                  id="bio"
                  placeholder="describe what you want your pfp to look like..."
                  className="outline-none py-3 placeholder:text-zinc-500 resize-none bg-transparent flex-grow md:overflow-hidden"
                />
                <Image
                  src={"/Images/push.svg"}
                  width={35}
                  height={35}
                  alt="logo"
                />
              </div>

              <div className=" h-[60vh] md:h-full w-full bg-transparent border rounded-xl grid place-items-center flex-grow relative">
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
                className="min-w-[40vw] h-[9rem] px-3 py-3 mt-1 block w-full rounded-md border outline-none text-sm resize-none bg-transparent"
              />
            </form>
          </div>
        </div>
    </>
  );
}

export default index