import React from 'react';
import Image from "next/image";

const index = () => {
  return (
    <div>
      <div className="flex items-center min-w-[48%] md:w-[48%] justify-between border bg-transparent px-4 py-5 rounded-xl mt-[1.5rem]">
        <p className="text-xl md:text-2xl">Auction</p>
        <Image src={"/Images/Down.svg"} alt="" width={20} height={20} />
      </div>
    </div>
  );
}

export default index