import React from "react";
import Image from "next/image";
import "./TopHero.css";
import { montserratAlternatesBold } from "@/lib/utils/fonts";

const TopHero = () => {
  return (
    <section>
      <div id="hero-section" className="h-full">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="hero-content md:space-y-6 space-y-4">
                  <h1
                    className={`${montserratAlternatesBold.className} lg:text-7xl md:text-5xl sm:text-6xl text-[40px]`}
                  >
                    Craft your
                    <br /> digital identity
                  </h1>
                  <p className="line-height-8 md:max-w-[68%] md:text-base sm:text-sm text-xs mx-auto">
                    In a realm where digital identities are crafted, traded, and
                    celebrated, QUYX enables visionaries and artists to unite to
                    redefine personal expression in the digital space.
                  </p>
                  <div className="flex items-center gap-2 md:gap-6 mx-auto justify-center flex_btn md:text-base sm:text-sm text-xs">
                    <button className="docs1 d-flex align-items-center justify-content-center gap-1">
                      Explore now
                    </button>
                    <button className="docs2 flex items-center justify-center ">
                      <Image
                        src={"/Images/Avatars/Play.svg"}
                        alt=""
                        width={20}
                        height={20}
                      />
                      Watch video
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHero;
