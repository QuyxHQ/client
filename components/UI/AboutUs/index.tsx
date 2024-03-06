import React from "react";
import "./AboutUs.css";
import AboutIcon from "./AboutIcon";



const About = () => {


  return (
    <>
      <div className="cover">
        <div className="container">
          <div className="pt-[6rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
              <div className="group_text pt-[6vw] md: w-full mb-8rem md:text-start">
                <p
                  id="Heading"
                  className=" text-[#fff] sm:text-[2rem] font-bold text-start md:text-[2rem]"
                >
                  Lorem
                </p>
                <p className="text-[#9DA3AF] text-start">
                  Quyx is Like your passport to the decentralized web! At Quyx,
                  <br /> we believe in empowering users within the web3.0
                  ecosystem, revolutionizing the way you manage your online
                  identity and presence.
                </p>
              </div>

              <div className="grid place-items-center">
                <AboutIcon width={500} height={500} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pb-[3rem]">
              <div className="bg-[#222] rounded-lg text-center px-8 py-20">
                <div
                  // key={id}
                  className="info space-y-2 text-center md:text-start"
                >
                  <img
                    src={"/Images/SVG.png"}
                    alt=""
                    width={100}
                    height={100}
                    className="mx-auto md:mx-0"
                  />
                  <h4 className="text-[#fff] text-[24px] font-bold">
                    Create Profile Cards
                  </h4>
                  <p className="text-[#9DA3AF] text-[16px]">
                    Unleash Your Expression. Effortlessly craft dynamic digital
                    identities with our intuitive profile creation feature,
                    tailoring unique profile cards for versatile representation
                    in the decentralized web — a canvas for your distinct online
                    presence.
                  </p>
                </div>
              </div>

              <div className="bg-[#222] rounded-lg text-center px-8 py-20">
                <div className="info space-y-2 text-center md:text-start">
                  <img
                    src={"/Images/Fig.png"}
                    alt=""
                    width={100}
                    height={100}
                    className="mx-auto md:mx-0"
                  />
                  <h4 className="text-[#fff] text-[24px] font-bold">
                    Sell Profile Cards
                  </h4>
                  <p className="text-[#9DA3AF] text-[16px]">
                    Quyx isn't just about creating profiles; it's about
                    empowering users to take control of their digital assets.
                    With our profile selling feature, you have the freedom to
                    trade your digital identity.
                  </p>
                </div>
              </div>

              <div className="bg-[#222] rounded-lg text-center px-8 py-20">
                <div className="info space-y-2 text-center md:text-start">
                  <img
                    src={"/Images/market.png"}
                    alt=""
                    width={100}
                    height={100}
                    className="mx-auto md:mx-0"
                  />
                  <h4 className="text-[#fff] text-[24px] font-bold">
                    Auction/Bid Profile Cards
                  </h4>
                  <p className="text-[#9DA3AF] text-[16px]">
                    Quyx introduces a unique and dynamic dimension to the world
                    of digital identities – the bidding and auction feature.
                    Engage in exciting transactions where users can bid on or
                    auction their profile cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
