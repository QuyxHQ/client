import AboutIcon from "../../../svgs/AboutIcon";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <h2>About Us</h2>
              <p>
                In a realm where digital identities are crafted, traded, and celebrated, emerges
                "QUYX."
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-10 mx-auto">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="item">
                  <AboutIcon width={250} height={344} />

                  <p>Phase One</p>
                  <h3>
                    It all began in the vibrant metropolis of Decentralia, where visionaries and
                    artists united to redefine personal expression in the digital space.
                  </h3>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-7">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="item-sm">
                      <p>Phase Two</p>
                      <h3>
                        In this bustling city, each individual is a canvas, and their story unfolds
                        through unique and customizable profile cards.
                      </h3>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="item-sm">
                      <p>Phase Three</p>
                      <h3>
                        Quyx is the hub where the digital avant-garde found their voice, turning the
                        mundane into masterpieces and empowering users to curate their online
                        presence like never before.
                      </h3>
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

export default About;
