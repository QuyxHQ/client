// Import necessary modules and components
"use client";
import React, { useState } from "react";
import {
  IoIosArrowRoundForward,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import useCustomSlider from "@/lib/hooks/Slider";
import Image from "next/image";

// Define CardProps type
type CardProps = {
  username: string;
  image: string;
  description: string;
  price: number;
};

// Sample data for cards
const data: CardProps[] = [
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  {
    username: "moyinthegrait",
    image: "/Images/Marketplace/blaze.png",
    description: `Meet Blaze Cipher, a formidable force in the blockchain realm, sculpting decentralized ecosystems with lines of unyielding code. A true maverick of the digital frontier, Blaze fearlessly navigates the complexities of smart contracts and blockchain architecture, crafting innovative solutions that redefine the landscape. With an unwavering commitment to pushing the limits of what's possible, Blaze Cipher stands as a trailblazer, rewriting the code of the future with unmatched skill and determination.`,
    price: 110.0,
  },
  // Add more data as needed
];

// Define the Card component
const Card: React.FC<CardProps> = ({ username, image, description, price }) => (
  <div className="min-h-[30rem] min-w-[50rem] rounded-lg relative card-border-effect">
    <div className="bg-gradient-to-b from-[#150b04] via-[#0b030c] border text-white relative to-[#0b030c]  space-y-4 h-full w-full rounded-md overflow-hidden card-border-effect">
      <div className="flex justify-center w-full h-full">
        <div className="w-[50%] min-h-fit">
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-[50%] p-4 my-auto">
          <p className="text-2xl">@{username}</p>
          <p className="whitespace-pre-line text-s text-zinc-400 select-none">
            {description}
          </p>
          <p className="text-4xl text-[#ffd599]">${price}</p>
        </div>
      </div>
    </div>
  </div>
);

// Define the Index component
const Index = () => {
  const { slider, slideLeft, slideRight } = useCustomSlider(500);

  return (
    <div className="feature_wrap bg-black">
      <div className="container flex align-center justify-between pt-[2rem] ">
        <h3 className="text-white text-[1.5rem] md:text-[2.5rem] font-bold">
          Featured Pro
        </h3>
        <button className="flex items-center justify-center border px-[18px] py-[7px] gap-3 text-white rounded-[500px]">
          Browse All
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div
        ref={slider}
        className="w-full h-full px-2 py-4 relative space-x-8 flex overflow-y-auto scroll whitespace-nowrap scroll-smooth slider"
        id="marketplace-sliderr"
      >
        {data.map((card, id) => (
          <Card key={id} {...card} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-[4rem]">
        {/* Left arrow */}
        <div className="bg-[#1A1A1A] p-2 rounded-md ">
          <IoIosArrowBack
            className="z-20 text-3xl text-white duration-200 cursor-pointer md:text-4xl text-shadow hover:opacity-75 dark:text-gray-200 text-center"
            onClick={slideLeft}
          />
        </div>

        <div className="flex items-center justify-center gap-1">
          <Image
            src={"/Images/Marketplace/scroll_profile.svg"}
            alt=""
            width={25}
            height={25}
          />
          <span className="text-white">tesla</span>
          <Image
            alt="verified"
            src={"/Images/verified.svg"}
            width={20}
            height={20}
          />
        </div>
        {/* Right arrow */}
        <div className="bg-[#1A1A1A] p-2 rounded-md ">
          <IoIosArrowForward
            className="z-20 text-3xl text-white  duration-200 cursor-pointer md:text-4xl text-shadow hover:opacity-75 dark:text-gray-200 text-center"
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
};

// Export the Index component
export default Index;
