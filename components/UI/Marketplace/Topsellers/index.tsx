import React from "react";
import "./Topsellers.css";
import Image from "next/image";

type Card = {
  profileImage: string;
  username: string;
  number: string;
};

const data: Card[] = [
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number: "1",
  },
];

const index = () => {
  return (
    <>
      <div className="wrap_Topseller bg-black">
        <div className="container">
          <h3 className="text-white pt-[2rem] font-bold   text-[1.5rem] md:text-[2.5rem] ">
            Top Sellers
          </h3>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-[2rem] pb-[2rem]">
          {data.map((card, id) => (
            <div key={id} className="flex items-center gap-2 w-full">
              {/* <div> */}
              <p className="text-white">{id + 1}</p>
              {/* </div> */}
              <div className="flex flex-grow align-center justify-start text-white border space-x-4 rounded-xl px-[1rem] py-[1.5rem]">
                <div>
                  <Image
                    src={card.profileImage}
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>
                <div className="flex align-center justify-center items-center text-[20px] gap-[5px] md:text-[25px]">
                  <span>{card.username}</span>
                  <Image
                    alt="verified"
                    src={"/Images/verified.svg"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
