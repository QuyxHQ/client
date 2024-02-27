import React from "react";
import "./AIPrompt.css";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import AI from "@/components/UI/Dashboard/Components/UploadAI";
import Create from "@/components/Common/Buttons/Create";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";

const AIPrompt = () => {
  return (
    <>
      <div className="AI_wrap bg-black">
        <div className="container text-white pb-[2rem]">
          <h1 className="text-white text-2xl font-bold pt-[2rem] md:text-4xl">
            Create Profile Card{" "}
          </h1>
          <Navigate />
          <AI />
          <div className="grid grid-cols-1 mt-[3rem] gap-[3rem] md:grid-cols-2">
            <div className="flex items-center gap-[2rem] mt-[2rem] ">
              <p className="text-[18px] md:text-2xl text-white">
                This card is for sale
              </p>
              <Toggle />
            </div>
            <Create />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPrompt;
