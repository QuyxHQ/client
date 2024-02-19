"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import "./Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";


const Headerd = () => {
  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleModal = () => setShowSideBar((prev) => !prev);

  return (
    <>
      <nav className="fixed w-full text-white z-[500]">
        <div className="container">
          <div className="d-flex items-center">
            <div className="flex gap-6  py-10 items-center md:flex-row justify-between">
              <div className="nav-brand">
                <Link href={"/"}>
                  <Image
                    src={"/Images/logo-full.svg"}
                    width={80}
                    height={80}
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="btn_container ">
                {/* <div className="btn"> */}
                <button className="flex items-center space-x-2 min-w-fit bg-blue-500 p-2 rounded-md">
                    <span className="text-[11px] lg:text-base xl:text-lg flex-shrink-0 2xl:text-xl">
                    Create
                    </span>
                    <Image
                    width={20}
                    height={20}
                    src={"/Images/Add.svg"}
                    alt="particleauth"
                    />
                </button>
                {/* </div> */}
             </div>
          <div className="flex gap-[8px] items-center justify-between w-fit rounded-[500px] bg-transparent border px-[20px] py-[10px] cursor-pointer">
            <Image
              alt="..."
              src={"/Images/Marketplace/icons/Search 2.svg"}
              width={20}
              height={20}
              className="text-white"
            />
            <input
              type="Search"
              placeholder="Search"
              className="border-none outline-none bg-transparent text-white w-[22vw]"
            />
            <Image
              alt="..."
              src={"/Images/Marketplace/icons/filter.svg"}
              width={20}
              height={20}
              className="text-white"
            />
          </div>
            <div className="flex gap-[8px] items-center justify-between w-fit rounded-[500px] bg-[#FFFFFF26] px-[15px] py-[7px]">
            <Image
              alt="..."
              src={"/Images/Wallet.svg"}
              width={20}
              height={20}
              className="text-white"
            />
            <p>$5,700.45</p>
            </div>
            <div className="flex">
            <Image
              alt="..."
              src={"/Images/profilerof.png"}
              width={64}
              height={64}
              className="text-white rounded-[120px]"
            />
            </div>
        </div>
        </div>
        </div>
    </nav>

      <aside
        className={`fixed overflow-hidden w-full duration-300 text-center right-0 top-0 bg-[#171717] text-white z-[1000] ${
          showSideBar ? "h-[100vh]" : "h-0"
        }`}
      >
        <div className="w-full min-h-full relative flex items-center justify-center">
          <IoClose
            className="absolute top-10 right-8 cursor-pointer"
            size={30}
            onClick={toggleModal}
          />

        </div>
      </aside>
    </>
  );
};

export default Headerd;
