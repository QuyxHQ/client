import { AnchorLink } from '../../..';

const Hero = () => {
    return (
        <div className="hero">
            <h1>Control your social identity</h1>
            <p>
                Your unified social identity on The Open Network (TON). Claim your unique username,
                secure your credentials, & join a community that values privacy & control.
            </p>

            <div className="buttons d-flex flex-column flex-md-row">
                <AnchorLink to="/claim">
                    <button>
                        <i className="h h-arrow-up-right" />
                        <span>Get Started</span>
                    </button>
                </AnchorLink>

                <button>
                    <i className="h h-play" />
                    <span>Watch Video</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
