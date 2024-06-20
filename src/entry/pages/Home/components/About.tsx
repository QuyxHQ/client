import AboutIcon from '../../../svgs/AboutIcon';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h2>About Us</h2>
                            <p>
                                Learn about our mission, milestones, and commitment to providing a
                                secure and integrated social identity platform.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row g-4">
                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="item">
                                    <AboutIcon size={300} />

                                    <div className="py-5" style={{ marginTop: '13.5rem' }} />

                                    <p>Phase 1: Concept & Development</p>
                                    <h3>
                                        Quyx was born out of the need for a unified social identity
                                        platform. Built on The Open Network (TON), we aimed to
                                        provide a seamless experience for users to manage their
                                        social credentials.
                                    </h3>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-7">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="item-sm">
                                            <p>Phase 2: Platform Launch</p>
                                            <h3>
                                                With the launch of our platform, we introduced
                                                username auctions and a Telegram mini app for
                                                credential management. Our zero-fee marketplace
                                                became a key feature, promoting user participation.
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="item-sm">
                                            <p>Phase 3: Growth & Expansion</p>
                                            <h3>
                                                As we grow, we continue to enhance our features and
                                                expand our community. Our focus remains on user
                                                privacy, control, and seamless integration
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
