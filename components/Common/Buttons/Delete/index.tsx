import React from 'react'
import Image from "next/image"

const index = () => {
  return (
    <div>
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
  );
}

export default index