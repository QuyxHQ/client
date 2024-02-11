import React from "react";
import "./Unlock.css";
import { montserratAlternatesBold } from "@/lib/utils/fonts";

const index = () => {
  return (
    <>
      <div className="Lock_wrapper bg-black pb-10">
        <div className="group_text space-y-2 w-full text-center">
          <p
            className= {`text-[#fff] text-[1.5rem] md:text-[2rem]  font-bold ${montserratAlternatesBold.className}`}
          >
            Unlock Limitless Possibilities <br /> with Our New Card Solutions
          </p>
          <p className="text-[#9DA3AF]  ">
            consectetur adipiscing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliquai.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
