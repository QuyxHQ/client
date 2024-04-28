import Features1 from "../../../svgs/Features1";
import Features2 from "../../../svgs/Features2";

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <h2>Powerful Features</h2>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="item">
                  <Features1 />

                  <p>Interchain Accounts</p>
                  <h3>One secure account for all your digital assets.</h3>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="item-sm">
                      <p>Decentralized Exchange</p>
                      <h3>Swap tokens & collectibles.</h3>

                      <div className="d-none d-lg-block">
                        <Features2 />
                      </div>

                      <div className="d-block d-lg-none">
                        <Features2 width={180} height={180} />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="item-sm">
                      <p>Decentralized Exchange</p>
                      <h3>Swap tokens & collectibles.</h3>

                      <div className="d-block d-lg-none">
                        <Features2 width={180} height={180} />
                      </div>

                      <div className="d-none d-lg-block">
                        <Features2 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
