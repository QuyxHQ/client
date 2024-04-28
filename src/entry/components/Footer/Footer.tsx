import { AnchorLink, GradientLogo } from "..";

const Footer = () => {
  return (
    <footer className="px-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mt-4 mb-5 mx-auto" style={{ width: "max-content" }}>
              <AnchorLink to="/">
                <GradientLogo className="mx-auto d-block" />
              </AnchorLink>
            </div>
          </div>

          <div className="col-12">
            <hr />
          </div>

          <div className="col-12">
            <div className="py-5 px-3">
              <div className="row g-5">
                <div className="col-6 col-lg-3">
                  <h4>#####</h4>

                  <ul>
                    <li>
                      <AnchorLink to="/marketplace">
                        <span>Marketplace</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Claim username</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Send us an email</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>Media</h4>

                  <ul>
                    <li>
                      <AnchorLink to="/marketplace">
                        <span>Marketplace</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Claim username</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Send us an email</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>Ecosystem</h4>

                  <ul>
                    <li>
                      <AnchorLink to="/marketplace">
                        <span>Marketplace</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Claim username</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Send us an email</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>Resources</h4>

                  <ul>
                    <li>
                      <AnchorLink to="/marketplace">
                        <span>Docs</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>SDKs</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink to="/claim">
                        <span>Whitepaper</span>
                        <i className="h h-external-link" />
                      </AnchorLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <hr />
          </div>

          <div className="bottom d-flex flex-column flex-md-row align-items-center justify-content-between p-3">
            <div className="links d-flex align-items-center">
              <AnchorLink to="/privacy-policy">Privacy Policy</AnchorLink>
              <span>|</span>
              <AnchorLink to="/tcs">Terms &amp; Conditions</AnchorLink>
            </div>

            <div className="socials d-flex align-items-center">
              <a href="#" target="_blank">
                <i className="h h-twitter" />
              </a>

              <a href="#" target="_blank">
                <i className="h h-github" />
              </a>

              <a href="#" target="_blank">
                <i className="h h-send" />
              </a>

              <a href="#" target="_blank">
                <i className="h h-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
