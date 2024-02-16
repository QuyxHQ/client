import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./ConnectBtn.css";

const ConnectBtn = () => {
  return (
    <div className="btn_container ">
      <Link href="/dashboard">
        {/* <div className="btn"> */}
        <button className="flex items-center space-x-2 min-w-fit bg-blue-500 p-2 rounded-md">
          <span className="text-[11px] lg:text-base xl:text-lg flex-shrink-0 2xl:text-xl">
            Connect With
          </span>
          <Image
            width={20}
            height={20}
            src={"/Images/particle_1.svg"}
            alt="particleauth"
          />
        </button>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default ConnectBtn;
