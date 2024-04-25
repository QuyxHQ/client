import HowItWorks1 from "../../../svgs/HowItWorks1";
import HowItWorks2 from "../../../svgs/HowItWorks2";
import HowItWorks3 from "../../../svgs/HowItWorks3";
import HowItWorksLine from "../../../svgs/HowItWorksLine";
import HowItWorksLineMobile from "../../../svgs/HowItWorksLineMobile";

const HowItWorks = () => {
  return (
    <div className="how-it-works" id="how-it-works">
      <h1>How it works</h1>

      <div className="items">
        {/* for >= tablet screen */}
        <div className="d-none d-md-block">
          <div className="item d-flex align-items-center">
            <div className="content">
              <HowItWorks1 />
            </div>

            <div className="divider">
              <HowItWorksLine />
              <span>1</span>
            </div>

            <div className="content">
              <div>
                <h4>Connect Wallet</h4>
                <p>Connect Wallet Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div className="item d-flex align-items-center flex-row-reverse">
            <div className="content">
              <HowItWorks2 />
            </div>

            <div className="divider">
              <HowItWorksLine />
              <span>2</span>
            </div>

            <div className="content">
              <div>
                <h4>Connect Wallet</h4>
                <p>Connect Wallet Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div className="item d-flex align-items-center">
            <div className="content">
              <HowItWorks3 />
            </div>

            <div className="divider">
              <HowItWorksLine />
              <span>3</span>
            </div>

            <div className="content">
              <div>
                <h4>Connect Wallet</h4>
                <p>Connect Wallet Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div className="item d-flex align-items-center">
            <div className="content"></div>
            <div className="divider">
              <HowItWorksLine height={100} />
            </div>
            <div className="content"></div>
          </div>
        </div>

        {/* for mobile screen */}
        <div className="d-block d-md-none">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <HowItWorksLineMobile height={100} />

            <span className="mb-4">1</span>

            <HowItWorks1 className="mb-5" />
            <div className="content text-center mb-2">
              <h4>Connect Wallet</h4>
              <p>Connect Wallet Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <HowItWorksLineMobile height={100} />

            <span className="mb-4">2</span>

            <HowItWorks2 className="mb-5" />
            <div className="content text-center mb-2">
              <h4>Connect Wallet</h4>
              <p>Connect Wallet Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <HowItWorksLineMobile height={100} />

            <span className="mb-4">3</span>

            <HowItWorks3 className="mb-5" />
            <div className="content text-center mb-1">
              <h4>Connect Wallet</h4>
              <p>Connect Wallet Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
