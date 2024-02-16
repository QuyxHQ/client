import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const index = () => {
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

            <div>
              <button className="flex items-center justify-center gap-2 bg-transparent border rounded-[500px] px-[20px] py-[15px]">
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
              <div className="flex align-center gap-[5px] justify-between w-fit rounded-[500px] bg-transparent border px-[30px] py-[15px]">
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

            <div className="flex items-center justify-center gap-[1rem]">
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default index