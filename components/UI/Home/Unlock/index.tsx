import React from "react";
import "./Unlock.css";
import Image from "next/image";
import { montserratAlternatesBold } from "@/lib/utils/fonts";
import { IoIosArrowRoundForward } from "react-icons/io";

const index = () => {
  return (
    <>
      <div className="Lock_wrapper bg-black pb-10">
        <div className="group_text space-y-2 w-full text-center">
          <p
            className={`text-[#fff] text-[1.5rem] xs:text-[1rem] md:text-[2rem]  font-bold ${montserratAlternatesBold.className}`}
          >
            Unlock Limitless Possibilities  with Our New Card Solutions
          </p>
          <p className="text-[#9DA3AF]  ">
            consectetur adipiscing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliquai.
          </p>
        </div>

        <div className="flex  flex-col w-full mt-[3rem] align-center justify-center md:gap-16 md:flex-row ">
          <div>
            <p
              className={`text-white text-xl text-center md:text-base font-bold ${montserratAlternatesBold.className} md:text-start `}
            >
              Subscribe to our newsletter
            </p>
            <p className="text-[#9DA3AF] text-center flex items-center gap-[3px] justify-center md:txt-start">
              Unsubscribe at anytime
              <IoIosArrowRoundForward />
            </p>
          </div>

          <div className="block relative text-white min-w-[13rem] mx-auto md:hidden ">
            <svg
              width="340"
              height="177"
              viewBox="0 0 340 177"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M229 92C264.5 92 301.75 52.6537 283.5 33.2261C268.941 17.7275 245.25 33.2261 255.25 54.7261C265.25 76.2261 311.874 97.7153 333 54.7249C347.582 25.0509 337.5 -5.71472 310.5 2.28616C283.5 10.287 300.821 90.0693 300.5 104.287C299 170.787 232.5 164.787 205.5 156.787"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M230 92L2.86775e-06 92"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M200.085 152.736L204.31 146.705C204.346 146.653 204.362 146.602 204.356 146.556C204.35 146.511 204.322 146.472 204.274 146.445C204.227 146.418 204.162 146.403 204.087 146.401C204.011 146.4 203.927 146.412 203.843 146.437L174.244 155.094L200.085 152.736ZM195.294 159.574L173.625 156.498L190.232 165.865C190.28 165.892 190.345 165.907 190.42 165.908C190.496 165.909 190.58 165.896 190.663 165.872C190.747 165.847 190.827 165.811 190.896 165.767C190.966 165.723 191.021 165.673 191.058 165.621L195.294 159.574Z"
                fill="#696969"
              />
              <path
                d="M200.246 153.284L204.494 155.99L204.079 156.581L196.237 159.051L173.077 155.762L200.246 153.284Z"
                fill="#696969"
              />
            </svg>

            <div className="absolute top-[3.5rem] max-w-40 overflow-hidden left-[0.75rem] w-full h-full">
              <input
                type="email"
                placeholder="your email here..."
                className="border-none outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          <div className="hidden md:block relative text-white min-w-[13rem]">
            <svg
              width="360"
              height="72"
              className="absolute -top-6 -right-36"
              viewBox="0 0 608 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M261.25 103.689C296.75 103.689 333.75 63.867 315.5 44.4395C300.941 28.9409 277.25 44.4395 287.25 65.9395C297.25 87.4395 365.874 102.68 387 59.6895C401.582 30.0155 373.139 5.20671 367.75 2.43951C362.361 -0.327699 352.089 0.630859 346.361 7.63107C332.861 24.1308 329.361 72.6304 399.861 74.6304"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M261.5 103.69L-4.51327e-06 103.69"
                stroke="white"
                stroke-width="0.5"
              />
              <path
                d="M405.574 71.3298L401.348 65.2989C401.312 65.247 401.296 65.1957 401.302 65.1501C401.308 65.1044 401.336 65.0661 401.384 65.0388C401.431 65.0116 401.496 64.9965 401.572 64.9951C401.647 64.9936 401.731 65.0058 401.815 65.0305L431.414 73.6873L405.574 71.3298ZM410.365 78.168L432.033 75.092L415.426 84.4592C415.379 84.4858 415.314 84.5004 415.238 84.5015C415.162 84.5026 415.078 84.4902 414.995 84.4655C414.911 84.4408 414.831 84.4046 414.762 84.3606C414.693 84.3166 414.637 84.2663 414.6 84.2146L410.365 78.168Z"
                fill="#696969"
              />
              <path
                d="M405.412 71.8777L401.164 74.5838L401.58 75.175L409.421 77.6443L432.581 74.3559L405.412 71.8777Z"
                fill="#696969"
              />
            </svg>

            <div className="absolute top-2 max-w-40 overflow-hidden -left-1 w-full h-full">
              <input
                type="email"
                placeholder="your email here..."
                className="border-none outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex align-center justify-center">
            <button className="docs -ml-[6rem] sm:-mt-[40px] bg-red text-[14px] md:mt-[0] px-[20px] py-[10px] flex align-center justify-center gap-1 md:ml-4 mr-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
