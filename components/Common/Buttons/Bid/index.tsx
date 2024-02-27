import React from 'react'
import Image from "next/image"

const index = () => {
  return (
    <div>
      <button className="Create text-[12px] flex items-center flex-shrink-0 justify-center gap-[6px] text-white rounded-[500px] px-[20px] py-[10px] md:text-[20px]">
        Bid
        <Image
          alt="..."
          src={"/Images/Buy 1.svg"}
          width={15}
          height={15}
          className="text-white"
        />
      </button>
    </div>
  );
}

export default index