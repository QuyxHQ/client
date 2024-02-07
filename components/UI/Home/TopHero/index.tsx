import React from "react";
import "./TopHero.css";
import { montserratAlternatesBold } from "@/lib/utils/fonts";

const TopHero = () => {
  return (
    <>
      <section id="hero-section" className="h-full">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="hero-content space-y-6">
                  <h1
                    id="main-title"
                    className={`${montserratAlternatesBold.className}`}
                  >
                    Craft your
                    <br /> digital identity
                  </h1>
                  <p className="">
                    In a realm where digital identities are crafted, traded, and
                    celebrated, QUYX enables visionaries and artists to unite to
                    redefine personal expression in the digital space.
                  </p>
                  <div className="flex_btn">
                    <button className="docs1 d-flex align-items-center justify-content-center gap-1">
                      Explore now
                    </button>
                    <button className="docs2 d-flex align-items-center justify-content-center gap-1">
                      Watch video
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHero;
