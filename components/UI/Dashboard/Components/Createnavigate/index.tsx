import React from 'react'
import "./Createnavigate.css"
import Link from "next/link";

const index = () => {
  return (
    <div>
      <div className="navigate flex items-start gap-[1rem] justify-start md:gap-[2rem]  px-3 py-3  mt-[1.5rem] bg-transparent border rounded-[500px] w-fit">
        <Link href="/">
          <p className="paragraph text-[12px] md:text-base">Upload media</p>
        </Link>
        <Link href="/">
          <p className="paragraph text-[12px] md:text-base">
            Generate PFP with AI prompt
          </p>
        </Link>
      </div>
    </div>
  );
}

export default index