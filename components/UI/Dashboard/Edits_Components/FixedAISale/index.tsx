import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Tab from "@/components/UI/Dashboard/WithoutCard/tab";
// import "@/components/UI/Dashboard/ProfileAISell/ProfileAISell.css";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Delete from "@/components/Common/Buttons/Delete";
import Dropdown from "@/components/UI/Dashboard/Components/Auction_fixed";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import Singleprice from "@/components/UI/Dashboard/Components/Singleprice";
import Savechange from "@/components/Common/Buttons/SaveChange_btn";
import EditAI from "@/components/UI/Dashboard/Components/EditAIForm";

const FixedAISale = () => {
  return (
    <>
      <div className="EditAIAuction_wrap bg-black">
        <div className="container pb-[2rem] text-white">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-white bg-[#272727] px-3 py-1 rounded-full">
              <Image
                alt="..."
                src={"/Images/Left 1.svg"}
                width={15}
                height={15}
                className="text-white"
              />
              Back
            </button>
            <button className="flex items-center gap-2 text-white px-3 py-1">
              <Image
                alt="..."
                src={"/Images/Edit 1.svg"}
                width={15}
                height={15}
                className="text-white"
              />
              Edit
            </button>
          </div>

          <Navigate />
          <EditAI />

          <div className="flex flex-col items-start md:flex-row md:items-center justify-between mt-[1rem]">
            <div className="flex gap-[1rem] items-center">
              <p className="text-[14px] md:text-xl text-white">
                Make Card Available for Sale
              </p>
              <Toggle />
            </div>
            <Delete />
          </div>

          <Dropdown />

          <Singleprice />
          <div className="text-white bg-[#1a1a1a] rounded-xl px-4 py-1 mt-[1rem] max-w-fit">
            <p className="inline text-xl">Eth</p>
          </div>
          <Savechange />
        </div>
      </div>
    </>
  );
};

export default FixedAISale;
