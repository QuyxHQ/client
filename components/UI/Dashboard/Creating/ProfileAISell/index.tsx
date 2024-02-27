import React from "react";
import "./ProfileAISell.css";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import Dropdown from "@/components/UI/Dashboard/Components/Auction_fixed";
import AI from "@/components/UI/Dashboard/Components/UploadAI";
import Singleprice from "@/components/UI/Dashboard/Components/Singleprice";
import Create from "@/components/Common/Buttons/Create";
import Note from "@/components/UI/Dashboard/Components/Note";

const ProfileAISell = () => {
  return (
    <>
      <div className="AIsell_wrap bg-black">
        <div className="container text-white pb-[2rem]">
          <h1 className="text-white text-2xl font-bold pt-[2rem] md:text-4xl">
            Create Profile Card{" "}
          </h1>
          <Navigate />
          <AI />

          <div className="flex flex-col items-start gap-[1rem] md:flex-row md:items-center md:gap-[2rem] mt-[1.5rem]">
            <div className="flex gap-[1rem] items-center">
              <p className="text-[16px] md:text-2xl text-white">
                This card is for sale
              </p>
              <Toggle />
            </div>
            <Note />
          </div>

          <Dropdown />

          <Singleprice />

          <div className="text-white bg-[#1a1a1a] rounded-xl px-4 py-1 mt-[1rem] max-w-fit">
            <p className="inline text-xl">Eth</p>
          </div>
          <Create />
        </div>
      </div>
    </>
  );
};

export default ProfileAISell;
