import React from "react";
import "./Howitworks.css";
import Image from "next/image";
import Grid from "../Grid";
import connect from "../../../../public/Images/connect.svg";

const index = () => {
  // const data = [
  //   {
  //     title: "Connect Wallet",
  //     description:
  //       "Connect WalletLorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  //   {
  //     title: "New Profile Card",
  //     description:
  //       "To create a new Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  //   {
  //     title: "Keep or Sell Your Profile Cards",
  //     description:
  //       "Decide to Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   },
  // ];

  return (
    <>
      <div className="Wrapper pb-[1rem]">
        <div className="flex items-center align-center justify-center gap-4 pt-[5rem] container">
          {/* <div className="but flex text-white-500 min-w-fit align-center justify-center bg-[#191919] rounded-[500px] px-4 py-2 space-x-2 ">
            <Image width={20} height={20} src={"/Images/brand.svg"} alt="" />
            <h3 className="text-[#fff] text-[16px]">Brand name</h3>
          </div> */}
          {Array.from({ length: 5 }).map((_, id) => (
            <div
              key={id}
              className={`text-white-500 min-w-fit align-center justify-center bg-[#191919] rounded-[500px] px-4 py-2 space-x-2 ${
                id > 0 ? "md:flex hidden" : 'flex'
              }`}
            >
              <Image width={20} height={20} src={"/Images/brand.svg"} alt="" />
              <h3 className="text-white text-[22px] flex-shrink-0 md:text-[16px]">
                Brand name
              </h3>
            </div>
          ))}
        </div>
        <div className="pt-[2rem] mt-[2rem]">
          <p
            id="Heading"
            className="para_graph1 text-[#fff] sm:text-[2rem] font-bold text-center md:text-[4rem]"
          >
            How it works
          </p>
          <Grid />
          {/* <div className="relative timeline space-y-8 md:space-y-container">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={
                  (idx + 1) % 2 === 0
                    ? "relative w-full md:px-32 md:py-12 sm:w-1/2 sm:left-1/2 right-con group"
                    : "relative left-0 w-full md:px-32 md:py-16 sm:w-1/2 group"
                }
              >
                <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
                  {idx}
                </span>
                <div className="p-8  text-[#fff] duration-200 opacity-90">
                  <h4 className="text-xl font-bold w-[16vw]">{item.title}</h4>
                  <p className="mt-2 w-[18vw]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex align-center justify-center">
            <button className="watch text-center">
              <Image
                src={"/Images/Avatars/Play.svg"}
                alt=""
                width={20}
                height={20}
              />
              Watch video
            </button>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default index;
