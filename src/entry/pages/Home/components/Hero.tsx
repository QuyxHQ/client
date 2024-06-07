import { AnchorLink } from "../../..";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Craft your digital identity</h1>
      <p>
        In a world of digital identities, QUYX brings together visionaries and artists to redefine
        personal identity(ies) online.
      </p>

      <div className="buttons d-flex flex-column flex-md-row">
        <button>
          <i className="h h-play" />
          <span>Watch Video</span>
        </button>

        <AnchorLink to="/claim">
          <button>
            <span>Claim Username</span>
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero;
