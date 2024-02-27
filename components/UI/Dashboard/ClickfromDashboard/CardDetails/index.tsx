import React from 'react'
import Image from "next/image";
import "@/components/UI/Dashboard/ProfileAISell/ProfilAISell.css";
import Form from "@/components/UI/Dashboard/Components/Upload";
import Navigate from "@/components/UI/Dashboard/Components/Createnavigate";
import Toggle from "@/components/UI/Dashboard/Components/Toggle/Toggle";
import Delete from "@/components/Common/Buttons/Delete";



const CardDetails = () => {
  return (
    <>
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

          <Delete/>
          </div>
        </div>
    </>
  );
}

export default CardDetails