import {
  montserratAlternatesMedium,
} from "@/lib/utils/fonts";
import React from "react";

const index = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="overflow-hidden">
        <label
          htmlFor="Enter Price"
          className="block text-lg font-medium text-white mt-[18px]"
        >
          Minimum Price <span className="text-[#9327ff]">(Optional)</span>
        </label>
        <div className="flex items-center justify-between border bg-transparent px-4 rounded-xl gap-5 overflow-hidden">
          <span
            className={`text-4xl text-[#ffd599] ${montserratAlternatesMedium.className}`}
          >
            $
          </span>
          <div className="h-[3rem] w-[0.5px] border rounded-lg bg-zinc-300"></div>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="0.00"
            required
            className="bg-transparent outline-none text-4xl py-5 flex-grow text-white"
          />
        </div>
      </div>
          <div className="overflow-hidden">
        <label
          htmlFor="Enter Price"
          className="block text-lg font-medium text-white mt-[18px]"
        >
          Minimum Price <span className="text-[#9327ff]">(Optional)</span>
        </label>
        <div className="flex items-center justify-between border bg-transparent px-4 rounded-xl gap-5 overflow-hidden">
          <span
            className={`text-4xl text-[#ffd599] ${montserratAlternatesMedium.className}`}
          >
            $
          </span>
          <div className="h-[3rem] w-[0.5px] border rounded-lg bg-zinc-300"></div>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="0.00"
            required
            className="bg-transparent outline-none text-4xl py-5 flex-grow text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
