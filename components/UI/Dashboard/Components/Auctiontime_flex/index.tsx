import React from "react";

const index = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-[5px] md:gap-[3rem] md:grid-cols-2 mb-[3rem]">
        <div>
          <p className="font-bold text-[18px] mt-[3rem] text-white">
            Auction Period
          </p>
          <div className=" flex gap-[.5rem] items-center justify-between text-white w-fit-content bg-transparent border px-5 mt-[10px] py-3 rounded-md ">
            <div className="flex flex-col gap-[8px] items-center">
              <p className="text-[#D9D9D9] text-[12px] md:text-[14px]">Days</p>
              <p className="text-[#D9D9D9] text-3xl md:text-5xl lg:text-6xl">00</p>
            </div>
            <span className="mt-8">:</span>
            <div className="flex flex-col gap-[8px] items-center">
              <p className="text-[#D9D9D9] text-[12px] md:text-[14px]">Hours</p>
              <p className="text-[#D9D9D9] text-3xl md:text-5xl lg:text-6xl">00</p>
            </div>
            <span className="mt-8">:</span>
            <div className="flex flex-col gap-[8px] items-center">
              <p className="text-[12px] md:text-[14px]  text-[#D9D9D9]">
                Minutes
              </p>
              <p className="text-[#D9D9D9] text-3xl md:text-5xl lg:text-6xl">00</p>
            </div>
            <span className="mt-8">:</span>
            <div className="flex flex-col gap-[8px] items-center">
              <p className="text-[12px] md:text-[14px] text-[#D9D9D9]">
                Second
              </p>
              <p className="text-3xl md:text-5xl lg:text-6xl text-[#D9D9D9]">03</p>
            </div>
          </div>
        </div>

        <div className="min-w-[20vw] ">
          <p className="font-bold text-[18px] mt-[3rem] text-white ">
            Max Number of bid <span className="text-[#9327ff]">(optional)</span>
          </p>
          <div className="border bg-transparent px-5 mt-[10px] py-[1.6rem] rounded-md">
            <p className="text-[#D9D9D9] text-3xl md:text-5xl lg:text-6xl">4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
