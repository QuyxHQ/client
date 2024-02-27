import React from "react";
import Image from "next/image";
// import "@/components/UI/Dashboard/ProfileAISell/ProfileAISell.css";
import "@/components/UI/Dashboard/WithoutCard/WithoutCard.css";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Delete from "@/components/Common/Buttons/Delete";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import EditForm from "@/components/UI/Dashboard/Components/EditForm";
import Savechange from "@/components/Common/Buttons/SaveChange_btn";

const EditNotforsale = () => {
  return (
    <div className="Card_wrap bg-black">
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
        <EditForm />

        <div className="flex items-center justify-between">
          <div className="flex gap-[1rem] items-center">
            <p className="text-[14px] md:text-xl text-white">
              Make Card Available for Sale
            </p>
            <Toggle />
          </div>

          <Delete />
        </div>
        <Savechange />
      </div>
    </div>
  );
};

export default EditNotforsale;
