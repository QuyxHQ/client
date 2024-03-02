import React from "react";

const Upload = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
        <div className="h-full">
          <div className=" h-[60vh] md:min-h-full  w-full bg-transparent border rounded-xl grid place-items-center ">
            <div className="text-center space-y-3">
              <p className="">Drag and drop media</p>
              <h3 className="font-bold text-purple-300 text-3xl cursor-pointer">
                Browse files
              </h3>
              <p className="text-[#D9D9D9]">max size 50mb</p>
            </div>
          </div>
          {/* <div className="flex items-center gap-[2rem] mt-[2rem] ">
              <p className="text-[18px] md:text-2xl text-white">
                This card is for sale
              </p>
              <Toggle />
            </div> */}
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
          {/* <button className="Create text-base min-w-[50%] mt-[1rem] sm:text-[14px] md:text-base px-3 sm:px-4 md:px-[20px] py-3 sm:py-2 md:py-[15px] flex items-center text-white justify-center gap-2 bg-transparent rounded-[500px]">
              Create
            </button> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Upload;