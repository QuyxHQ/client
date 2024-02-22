"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CreatedTabView from "./created-view";
import BoughtTabView from "./bought-view";
import SoldTabView from "./sold-view";
import ActiveTabView from "./active-view";
import ForSaleTabView from "./for-sale";

type Tabs = "created" | "bought" | "sold" | "active" | "for-sale";
type TabButton = { text: string; tab: Tabs };

const buttons: TabButton[] = [
  {
    text: "Created",
    tab: "created",
  },
  {
    text: "Bought",
    tab: "bought",
  },
  {
    text: "Sold",
    tab: "sold",
  },
  {
    text: "Active",
    tab: "active",
  },

  {
    text: "For Sale",
    tab: "for-sale",
  },
];

const Tab = () => {
  const [currentTab, setCurrrentTab] = useState<Tabs>("created");

  const renderTabView = (): JSX.Element | null => {
    switch (currentTab) {
      case "created":
        return <CreatedTabView />;
      case "bought":
        return <BoughtTabView />;
      case "sold":
        return <SoldTabView />;
      case "active":
        return <ActiveTabView />;
      case "for-sale":
        return <ForSaleTabView />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="text-white flex items-center justify-between mt-[2rem]">
        {buttons.map((burtin, id) => (
          <button
            className={`text-[12px] border px-1  md:text-base duration-300 md:border rounded-full md:px-4 md:py-2 ${
              currentTab === burtin.tab
                ? "font-extrabold border-purple-500 "
                : "border-zinc-500"
            }`}
            onClick={() => setCurrrentTab(burtin.tab)}
          >
            {burtin.text}
          </button>
        ))}

        <div className=" hidden md:flex align-center gap-[5px] justify-between w-fit rounded-[500px] bg-transparent border px-[30px] py-[15px]">
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
            className="border-none outline-none bg-transparent text-white w-[10vw]"
          />
          <Image
            alt="..."
            src={"/Images/Marketplace/icons/filter.svg"}
            width={20}
            height={20}
            className="text-white"
          />
        </div>
        <button className=" hidden text-[14px] md:flex items-center justify-center gap-[6px] bg-[#272727]  rounded-[500px] px-[20px] py-[10px] md:text-base">
          <Image
            alt="..."
            src={"/Images/bookmark.svg"}
            width={15}
            height={15}
            className="text-white"
          />
          saved
        </button>
      </div>

      {renderTabView()}
    </>
  );
};

export default Tab;
