import React from "react";
import "./About.css";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="wrapper_cont  md:bg-black py-32 lg:text-white lg:py-48 xl:py-64">
        <div className="group_text  sm:mb-[3vw] pt-[6vw] md:pt-2 w-full mb-8rem text-center">
          <h1 className="text-[#fff] text-[3vw] font-bold ">About Us</h1>
          <p className=" text-[1vw] text-[#9DA3AF]  ">
            In a realm where digital identities are crafted, traded, and
            <br />
            celebrated, emerges "QUYX."
          </p>
        </div>

        <div className="grid gap-7 grid-cols-7 text-white bg-red w-[95%] max-w-[1100px] min-h-[40rem]  mx-auto">
          <div className="grid_1 col-span-3 bg-[#171717] rounded-lg border-white-500 flex-1 p-8 relative">
            <div className="absolute top-0 left-0 w-full h-full px-8 pb-20 flex items-end">
              <div className="space-y-2">
                <p className="text-zinc-500 text-sm">Phase One</p>
                <p className="text-2xl leading-loose">
                  It all began in the vibrant metropolis of Decentralia, where
                  visionaries and artists united to redefine personal expression
                  in the digital space.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-4 grid gap-7 grid-cols-2">
            <div className="bg-[#171717] p-6 relative flex items-center rounded-lg col-span-2 border-white-500">
              <div className="space-y-2">
                <p className="text-zinc-500 text-sm">Phase One</p>
                <p className="text-2xl">
                  In this bustling city, each individual is a canvas, and their
                  story unfolds through unique and customizable profile cards.
                </p>
              </div>
            </div>
            <div className="bg-[#171717] p-8 relative flex items-center rounded-lg col-span-2 border-white-500">
              <div className="space-y-2">
                <p className="text-zinc-500 text-sm">Phase One</p>
                <p className="text-2xl">
                  Quyx is the hub where the digital avant-garde found their
                  voice, turning the mundane into masterpieces and empowering
                  users to curate their online presence like never before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
