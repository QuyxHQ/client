import React from 'react'
import "./Topsellers.css"
import Image from "next/image"

type Card = {
  profileImage: string;
  username: string;
  number:string;
 
};

const data: Card[] = [
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",
  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
  {
    username: "nerdydev",
    profileImage: "/Images/Marketplace/nerdy_profile.svg",
    number:"1",

  },
];

const index = () => {
  return (
    <>
      <div className="wrap_Topseller bg-black">
        <div className="container">
          <h3 className="text-white text-[2.5rem] pt-[2rem] font-bold">
            Top Sellers
          </h3>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-[2rem] pb-[2rem]">
        {data.map((card, id) => (
          <div key={id} className="">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-white">{card.number}</p>
                <div className="flex align-center justify-start text-white border space-x-4">
                  <div>
                    <Image
                      src={card.profileImage}
                      alt=""
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="flex align-center justify-center items-center">
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
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default index