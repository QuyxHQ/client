import React from "react";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Form from "@/components/UI/Dashboard/Components/Upload";
import "./CreateUpload.css";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Create from "@/components/Common/Buttons/Create";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";

const CreateUpload = () => {
  return (
    <>
      <div className="create_wrapper bg-black">
        <div className="container text-white pb-[2rem]">
          <h1 className="text-white text-2xl font-bold pt-[2rem] md:text-4xl">
            Create Profile Card{" "}
          </h1>
          <Navigate />
          <Form />
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

export default CreateUpload;
