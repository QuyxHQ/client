import React from "react";

const index = () => {
  return (
    <div>
      <div className="flex items-center min-w-[48%] md:w-[48%] justify-between border bg-transparent px-4 py-5 rounded-xl mt-[1.5rem]">
        <p className="text-xl md:text-2xl">Auction</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 12 6"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            d="M11 1L9.253 2.763c-1.394 1.406-2.09 2.109-2.94 2.217a2.478 2.478 0 01-.626 0c-.85-.108-1.546-.811-2.94-2.217L1 1"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default index;
