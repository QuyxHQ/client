import React from "react";
import Image from "next/image";
import Link from "next/link";
// import "@/components/UI/Dashboard/ProfileAISell/ProfileAISell.css";
import Tab from "@/components/UI/Dashboard/WithoutCard/tab";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Price from "@/components/UI/Dashboard/Components/Price";
import Dropdown from "@/components/UI/Dashboard/Components/Auction_fixed";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import EditAI from "@/components/UI/Dashboard/Components/EditAIForm";
import Auction from "@/components/UI/Dashboard/Components/Auctiontime_flex";
import Savechange from "@/components/Common/Buttons/SaveChange_btn";
import Delete from "@/components/Common/Buttons/Delete";

const EditAIAuction = () => {
  return (
    <>
      <div className="EditAIAuction_wrap bg-black">
        <div className="container text-white pb-[2rem]">
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

          <Price />

          <div className="text-white bg-[#1a1a1a] rounded-xl px-4 py-1 mt-[1rem] max-w-fit">
            <p className="inline text-xl">Eth</p>
          </div>

          <Auction />

          <div className="">
            <label className="mb-[1rem] flex items-center gap-[1rem]">
              <span className="text-sm md:text-md">
                Receive notifications for every new bid
              </span>
              <input
                type="checkbox"
                className="mr-2 form-checkbox outline-none border-none"
                id="agree"
                name="agree"
                value="agree"
                required
              />
            </label>
          </div>

          <Savechange />
        </div>
      </div>
    </>
  );
};

export default EditAIAuction;
