import React from 'react'
import Image from "next/image"

const index = () => {
  return (
    <div>
      <span className="text_span text-[13px] md:text-base text-white flex items-center gap-[6px] bg-[#1A1a1a] rounded-[500px] px-2 py-2">
        <Image src={"/Images/note.svg"} alt="" width={20} height={20} />
        Note: 10% of your selling price will be deducted as commission fees
      </span>
    </div>
  );
}

export default index