import React from 'react'
import Image from "next/image";
import particle from "../public/Images/particle 1.png"
import "./ConnectBtn.css"

const ConnectBtn = () => {
  return (
    <div className="btn_container">
      {/* <div className="btn"> */}
        <button>
          Connect With <Image src={particle} alt="particleauth" />
        </button>
      {/* </div> */}
    </div>
  );
}

export default ConnectBtn