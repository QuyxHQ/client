import { AnchorLink } from "../../..";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Craft your digital identity</h1>
      <p>
        In a world of digital identities, QUYX brings together visionaries and artists to redefine
        personal identity(ies) online.
      </p>

      <div className="buttons d-flex flex-column">
        <AnchorLink to="/marketplace">
          <button>
            <span>Claim Username</span>
          </button>
        </AnchorLink>

        <button>
          <i className="h h-play" />
          <span>Watch Explainer Video</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
