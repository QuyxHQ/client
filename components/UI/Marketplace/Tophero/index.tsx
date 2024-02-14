"use client";
import useCustomSlider from "@/lib/hooks/Slider";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import "./Tophero.css";
import Link from "next/link";
import { montserratAlternatesMedium } from "@/lib/utils/fonts";
import { useState } from "react";

type Coin = "ETH" | "JPY"; // add more...

type Card = {
  profileImage: string;
  username: string;
  image: string;
  title: string;
  description: string;
  price: number;
  coinType: Coin;
  additionalClass?: string;
  amount: number;
};

const data: Card[] = [
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/codeforge.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/maestro.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "@moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/codeforge.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/maestro.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
  {
    username: "moyinthegrait",
    profileImage: "/Images/Avatars/profile_moyin.png",
    image: "/Images/moyin_nft.png",
    description: `A web3 design maverick, that fearlessly pioneers the future of digital aesthetics with blockchain brushes and NFT chisels`,
    title: "@Design Maverick",
    price: 89.25,
    coinType: "ETH",
    amount: 0.024,
  },
];

const Tophero = () => {
  const { slider, slideLeft, slideRight } = useCustomSlider(500);

  return (
    <>
      <div className="wrap">
        <div className="flex container pt-40 align-center justify-between">
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

          <div>
            <p className="text-white font-bold">Results Per Page</p>
          </div>
        </div>
        <div className="container">
          <h3 className="text-white text-[1.5rem] md:text-[2.5rem] mt-[2.5rem] font-bold">Featured Cards</h3>
        </div>
        <div className="relative flex items-center space-x-7">
          <div
            ref={slider}
            className="w-full h-full px-2 py-4 relative space-x-8 flex overflow-y-auto scroll whitespace-nowrap scroll-smooth slider"
            id="marketplace-slider"
          >
            {data.map((card, id) => (
              <Card key={id} {...card} />
            ))}
          </div>

          {/* Left arrow */}
          <div className="absolute -left-8 top-1/2">
            <IoIosArrowBack
              //   icon={faChevronLeft}
              className="z-20 text-3xl text-white duration-200 cursor-pointer
          md:text-4xl text-shadow hover:opacity-75 dark:text-gray-200"
              onClick={slideLeft}
            />
          </div>

          {/* Right arrow */}
          <div className="absolute -right-2 top-1/2">
            <IoIosArrowForward
              // icon={faChevronRight}
              className="z-20 text-3xl text-white duration-200 cursor-pointer md:text-4xl text-shadow hover:opacity-75 dark:text-gray-200"
              onClick={slideRight}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Card: React.FC<Card> = (data) => {
  const {
    username,
    profileImage,
    amount,
    coinType,
    description,
    image,
    price,
    title,
  } = data;

  const [compressed, setCompressed] = useState(true);

  return (
    <div className="min-h-[30rem] min-w-[20rem] rounded-lg relative card-border-effect">
      <div className="bg-gradient-to-b from-[#150b04] via-[#0b030c] border text-white relative to-[#0b030c] p-4 space-y-4 h-full w-full rounded-md card-border-effect">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={profileImage} alt="" width={35} height={35} />
            <span className="text-sm">{username}</span>
            <Image
              alt="verified"
              src={"/Images/verified.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="md:h-[15rem] h-[10rem] rounded-lg relative overflow-hidden">
          <Image
            src={image}
            alt=""
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3 py-3 px-1">
          <p className={`${montserratAlternatesMedium.className} text-xl`}>
            {title}
          </p>
          <p className="whitespace-pre-line text-xs text-zinc-400 select-none">
            {compressed ? (
              <>
                {description.length > 50 ? (
                  <span>
                    {description.slice(0, 100)}...{" "}
                    <span
                      className="text-purple-300 cursor-pointer"
                      onClick={() => setCompressed((prev) => !prev)}
                    >
                      See More
                    </span>
                  </span>
                ) : (
                  description
                )}
              </>
            ) : (
              description
            )}
          </p>
          <div className="flex items-center gap-1 py-1">
            <p className="text-4xl text-[#ffd599]">${price}</p>
            <div className="flex text-zinc-500 items-center gap-1 text-lg">
              <p>~</p>
              <p>{amount}</p>
              <p>{coinType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tophero;
