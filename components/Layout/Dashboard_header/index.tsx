"use client";
// import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import "./Dashboard_header.css";

const index = () => {
  // const pathname = usePathname();
  // const [showSideBar, setShowSideBar] = useState<boolean>(false);

  // const toggleModal = () => setShowSideBar((prev) => !prev);
  return (
    <>
      <nav className="bg-black">
        <div className="container">
          <div className="flex gap-6  py-10 items-center md:flex-row justify-between text-white">
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

            <div className="btn_container hidden md:block">
              <button className="flex items-center justify-center gap-2 flex-shrink-0 rounded-[500px] px-[20px] py-[15px]">
                Create
                <Image
                  src={"/Images/Vector.svg"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </button>
            </div>

            <div>
              <div className="hidden md:flex align-center gap-[5px] justify-between w-fit rounded-[500px] bg-transparent border px-[30px] py-[15px]">
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
                  className="border-none outline-none bg-transparent text-white w-[27vw]"
                />
                <Image
                  alt="..."
                  src={"/Images/Marketplace/icons/filter.svg"}
                  width={20}
                  height={20}
                  className="text-white"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center gap-[1rem]">
              <button className="flex items-center justify-center gap-2 rounded-[500px] px-[20px] py-[15px] bg-[#272727]">
                <Image
                  src={"/Images/Wallet.svg"}
                  width={20}
                  height={20}
                  alt="logo"
                />
                $5,700.45
              </button>

              <Image
                src={"/Images/moyin.svg"}
                width={35}
                height={35}
                alt="logo"
              />
            </div>

            <div className="flex items-center justify-center gap-8 md:hidden">
              <Image
                src={"/Images/Vector.svg"}
                width={20}
                height={20}
                alt="logo"
                className="bg-transparent border rounded-full  text-white"
              />
              <Image
                src={"/Images/Wallet.svg"}
                width={20}
                height={20}
                alt="logo"
                className="bg-transparent border rounded-full  text-white"
              />
              <Image
                alt="..."
                src={"/Images/Marketplace/icons/Search 2.svg"}
                width={20}
                height={20}
                className="bg-transparent border rounded-full  text-white"
              />
              <Image
                src={"/Images/moyin.svg"}
                width={20}
                height={20}
                alt="logo"
                className="bg-transparent border rounded-full  text-white"
              />
            </div>

            {/* <div className="flex align-center items-center">
              <RxHamburgerMenu
                size={26}
                className="md:hidden cursor-pointer"
                onClick={toggleModal}
              />
            </div> */}
          </div>
        </div>
      </nav>

      {/* <aside
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
          <button
            className="flex items-center justify-center gap-2 flex-shrink-0 bg-transparent border rounded-[500px] px-[20px] py-[15px]"
            onClick={toggleModal}
          >
            Create
            <Image
              src={"/Images/Vector.svg"}
              width={20}
              height={20}
              alt="logo"
            />
          </button>
        </div>
      </aside> */}
    </>
  );
};

export default index;
