import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import Form from "@/components/UI/Dashboard/Components/Upload";
import Single from "@/components/UI/Dashboard/Components/Singleprice";
import Dropdown from "@/components/UI/Dashboard/Components/Auction_fixed";
import Create from "@/components/Common/Buttons/Create";




const ToggleAvailSale = () => {
  return (
    <>
      <div className="togglesale_wrap bg-black">
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

         <Navigate/>

          <Form/>

          <div className="flex items-center justify-between mt-[1rem]">
            <div className="flex gap-[1rem] items-center">
              <p className="text-[14px] md:text-xl text-white">
                Make Card Available for Sale
              </p>
              <Toggle />
            </div>
          </div>

          <Dropdown/>

         <Single/>
          <div className="text-white bg-[#1a1a1a] rounded-xl px-4 py-1 mt-[1rem] max-w-fit">
            <p className="inline text-xl">Eth</p>
          </div>
         <Create/>
        </div>
      </div>
    </>
  );
};

export default ToggleAvailSale;
