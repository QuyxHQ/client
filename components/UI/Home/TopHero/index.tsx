import React from "react";
import "./TopHero.css";

const TopHero = () => {
  return (
    <>
      <section id="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                {/* <Header /> */}
                {/* <div className="col-12"> */}
                <div className="hero-content ">
                  <h1>Craft your digital identity</h1>
                  <p className="mb-3">
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

      <div id="test">
        <div>logo</div>
        <div>
          <p>link 1</p>
          <p>link 1</p>
          <p>link 1</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default TopHero;
