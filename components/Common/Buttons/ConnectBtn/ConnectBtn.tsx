import React from "react";
import Image from "next/image";
import "./ConnectBtn.css";

const ConnectBtn = () => {
  return (
    <div className="btn_container">
      {/* <div className="btn"> */}
      <button className="flex items-center space-x-2">
        <span>Connect With</span>
        <Image
          width={20}
          height={20}
          src={"/Images/particle_1.svg"}
          alt="particleauth"
        />
      </button>
      {/* </div> */}
    </div>
  );
};

export default ConnectBtn;
