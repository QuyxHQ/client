import WhatWeOffer1 from "../../../svgs/WhatWeOffer1";
import WhatWeOffer2 from "../../../svgs/WhatWeOffer2";
import WhatWeOffer4 from "../../../svgs/WhatWeOffer4";

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer" id="what-we-offer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <h2>What We Offer You</h2>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-11 col-xl-8 mx-auto">
            <div className="row g-5">
              <div className="col-12 col-md-6">
                <div className="item d-flex flex-column align-items-center align-items-md-start">
                  <WhatWeOffer1 />
                  <h3>Marketplace</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="item d-flex flex-column align-items-center align-items-md-start">
                  <WhatWeOffer4 />
                  <h3>Marketplace</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="item d-flex flex-column align-items-center align-items-md-start">
                  <WhatWeOffer2 />
                  <h3>Marketplace</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="item d-flex flex-column align-items-center align-items-md-start">
                  <WhatWeOffer4 />
                  <h3>Marketplace</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
