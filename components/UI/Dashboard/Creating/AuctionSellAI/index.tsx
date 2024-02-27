import React from "react";
import "./AuctionSellAI.css";
import Note from "@/components/UI/Dashboard/Components/Note";
import Create from "@/components/Common/Buttons/Create";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import Auction from "@/components/UI/Dashboard/Components/Auctiontime_flex";
import Price from "@/components/UI/Dashboard/Components/Price";
import Dropdown from "@/components/UI/Dashboard/Components/Auction_fixed";
import AI from "@/components/UI/Dashboard/Components/UploadAI";


// import "./ProfileAISell.css";

const AuctionSellAI = () => {
  return (
    <>
      <div className="Auctionsell_wrap bg-black">
        <div className="container text-white pb-[2rem]">
          <h1 className="text-white text-2xl font-bold pt-[2rem] md:text-4xl">
            Create Profile Card{" "}
          </h1>
         <Navigate/>
<AI/>

          <div className="flex flex-col items-start gap-[1rem] md:flex-row md:items-center md:gap-[2rem] mt-[1.5rem]">
            <div className="flex">
              <p className="text-[16px] md:text-2xl text-white">
                This card is for sale
              </p>
              {/* <FaToggleOn className="text-[40px]" /> */}
            </div>
          <Note/>
          </div>
<Dropdown/>

          <Price/>

          <div className="text-white bg-[#1a1a1a] rounded-xl px-4 py-1 mt-[1rem] max-w-fit">
            <p className="inline text-xl">Eth</p>
          </div>

          <Auction/>

          

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

          <Create/>
        </div>
      </div>
    </>
  );
};

export default AuctionSellAI;
