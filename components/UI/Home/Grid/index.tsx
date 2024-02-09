import Image from "next/image";

import "./Grid.css";

const index = () => {
  return (
    <div className="relative timeline grid-col-1 space-y-8 md:space-y-0 container grid grid-cols-2 items-center gap-y-16 my-[8rem]">
      <div className="xl:px-[12rem] lg:px-[8rem] md:px-[4rem] px-8 relative">
        <div className="max-h-[20rem] min-h-[12rem] rounded-lg border-zinc-400">
          <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
            1
          </span>

          <Image
            src={"/Images/connect.svg"}
            alt="image"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="xl:px-[12rem] lg:px-[8rem] space-y-3 md:px-[4rem] px-8 relative">
        <p className="font-bold text-[#fff] text-lg">Connect Wallet</p>

        <p className="text-[#fff]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          aliquam hic distinctio ad, nobis unde consectetur veritatis odit
          molestiae facere!
        </p>
      </div>

      <div className="xl:px-[12rem] lg:px-[8rem] space-y-3 md:px-[4rem] px-8 relative">
        <p className="font-bold text-[#fff] text-lg">New Profile Card</p>

        <p className="text-[#fff]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          aliquam hic distinctio ad, nobis unde consectetur veritatis odit
          molestiae facere!
        </p>
      </div>

      <div className="xl:px-[12rem] lg:px-[8rem] md:px-[4rem] px-8 relative right-con">
        <div className="max-h-[20rem] min-h-[12rem] rounded-lg border-zinc-400">
          <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
            2
          </span>

          <Image
            src={"/Images/newpf.svg"}
            alt="image"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="xl:px-[12rem] lg:px-[8rem] md:px-[4rem] px-8 relative">
        <div className="max-h-[20rem] min-h-[12rem] rounded-lg border-zinc-400">
          <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
            3
          </span>

          <Image
            src={"/Images/sellpf.svg"}
            alt="image"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="xl:px-[12rem] lg:px-[8rem] space-y-3 md:px-[4rem] px-8 relative">
        <p className="font-bold text-[#fff] text-lg">
          Keep or Sell your profile Cards
        </p>

        <p className="text-[#fff]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          aliquam hic distinctio ad, nobis unde consectetur veritatis odit
          molestiae facere!
        </p>
      </div>
    </div>
  );
};

export default index;
