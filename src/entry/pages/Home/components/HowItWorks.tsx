import { AnchorLink } from '../../..';
import HowItWorks1 from '../../../svgs/HowItWorks1';
import HowItWorks2 from '../../../svgs/HowItWorks2';
import HowItWorks3 from '../../../svgs/HowItWorks3';
import HowItWorksLine from '../../../svgs/HowItWorksLine';
import HowItWorksLineMobile from '../../../svgs/HowItWorksLineMobile';

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
                            <HowItWorksLine height={80} />
                            <span>1</span>

                            <HowItWorksLine />
                        </div>

                        <div className="content">
                            <div>
                                <h4>Claim your username</h4>
                                <p>
                                    Start an auction <AnchorLink to="/claim">here</AnchorLink> to
                                    secure your preferred username.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="item d-flex align-items-center flex-row-reverse">
                        <div className="content">
                            <HowItWorks2 />
                        </div>

                        <div className="divider">
                            <span>2</span>
                            <HowItWorksLine />
                        </div>

                        <div className="content">
                            <div>
                                <h4>Create & manage credentials</h4>
                                <p>
                                    Use our Telegram mini app (@QuyxBot) to set up, create, & manage
                                    your credentials.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="item d-flex align-items-center">
                        <div className="content">
                            <HowItWorks3 />
                        </div>

                        <div className="divider">
                            <span>3</span>
                            <HowItWorksLine />
                        </div>

                        <div className="content">
                            <div>
                                <h4>Connect across platforms</h4>
                                <p>
                                    Integrate & use your credentials seamlessly across various
                                    platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for mobile screen */}
                <div className="d-block d-md-none">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <HowItWorksLineMobile height={100} />

                        <span className="mb-4">1</span>

                        <HowItWorks1 className="mb-5" />
                        <div className="content text-center mb-2">
                            <h4>Claim your username</h4>
                            <p>
                                Start an auction <AnchorLink to="/claim">here</AnchorLink> to secure
                                your preferred username.
                            </p>
                        </div>

                        <HowItWorksLineMobile height={100} />

                        <span className="mb-4">2</span>

                        <HowItWorks2 className="mb-5" />
                        <div className="content text-center mb-2">
                            <h4>Create & manage credentials</h4>
                            <p>
                                Use our Telegram mini app (@QuyxBot) to set up, create, & manage
                                your credentials.
                            </p>
                        </div>

                        <HowItWorksLineMobile height={100} />

                        <span className="mb-4">3</span>

                        <HowItWorks3 className="mb-5" />
                        <div className="content text-center mb-1">
                            <h4>Connect across platforms</h4>
                            <p>
                                Integrate & use your credentials seamlessly across various
                                platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
