import React from "react";
import "./Whatweoffer.css";

type Offer = {
  Image: string;
  title: string;
  description: string;
};

const index = () => {
  const data: Offer[] = [
    {
      Image: "/Images/market.png",
      title: "Marketplace",
      description:
        "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees.",
    },
    {
      Image: "/Images/market.png",
      title: "Lorem ipsum",
      description:
        "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees.",
    },
    {
      Image: "/Images/fig.png",
      title: "Lorem ipsum",
      description:
        "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees.",
    },
    {
      Image: "/Images/SVG.png",
      title: "Lorem ipsum",
      description:
        "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees.",
    },
  ];

  return (
    <>
      <div className="cover">
        <div className="control container m-auto" space-y-8>
          <div className="group_text  sm:mb-[4vw] pt-[6vw] text-center md: w-full md:pt-[3rem] mb-8rem md:text-start">
            <p
              id="Heading"
              className="para_graph1 text-[#fff] sm:text-[2rem] font-bold text-center md:text-[4rem]"
            >
              What We Offer You
            </p>
            <p className="para_graph  text-[#9DA3AF] text-center">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="info_grid pt-[3vw] grid grid-cols-1 gap-[3rem] mx-auto md:grid-cols-2 w-[70%] mx:auto pb-[10rem] md:gap-[6rem]">
            {data.map((info, id) => (
              <div
                key={id}
                className="info space-y-2 text-center md:text-start"
              >
                <img
                  src={info.Image}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto md:mx-0"
                />{" "}
                {/* Change 'profileImage' to 'Image' */}
                <h4 className="text-[#fff] text-[24px] font-bold">
                  {info.title}
                </h4>
                <p className="text-[#fff] text-[16px]">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
